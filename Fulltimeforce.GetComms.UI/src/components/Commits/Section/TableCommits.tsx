import { GetCommitsRsDTO } from "@/common/domain/get-commits.interface";
import {
  Avatar,
  Box,
  Chip,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  capitalize,
  Paper
} from "@mui/material";
import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import shortcodeToEmoji from "@/application/utils/emojis/gitmojis.handler";

export type CardCommitsProps = {
  commits?: GetCommitsRsDTO[] | null;
};
const TableCommits = (props: CardCommitsProps) => {
  const { commits } = props;
  return (
    <Paper>
      {commits ? (
        <Box>
          <TableContainer component={Box}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width={500}>Message</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Verification</TableCell>
                  <TableCell>Comments</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {commits ? (
                  commits.map((comm) => (
                    <TableRow key={comm.sha}>
                      <TableCell>
                        <Typography variant="body1">
                          {shortcodeToEmoji(comm.commit.message)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <ListItem sx={{ pl: 0 }}>
                          <ListItemAvatar>
                            <Avatar
                              alt={comm.commit.author.name}
                              src={comm.commit.author.avatar_url}
                            ></Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={comm.commit.author.name}
                            secondary={
                              <Chip
                                component="span"
                                size="small"
                                label={comm.commit.author.user_name}
                              />
                            }
                          />
                        </ListItem>
                      </TableCell>
                      <TableCell>
                        <Grid sx={{ alignItems: "center" }} container spacing={1}>
                          <Grid item xs={12} lg={6}>
                            <Chip
                              sx={{minWidth: "100%"}}
                              label={capitalize(
                                comm.commit.verification.reason
                              )}
                              variant="outlined"
                              color={
                                comm.commit.verification.reason == "valid"
                                  ? "success"
                                  : "info"
                              }
                            />
                          </Grid>
                          <Grid item xs={12} lg={6}>
                            <Chip
                              sx={{minWidth: "100%"}}
                              label={capitalize(
                                comm.commit.verification.verified
                                  ? "verified"
                                  : "unverified"
                              )}
                              color={
                                comm.commit.verification.verified
                                  ? "success"
                                  : "warning"
                              }
                            />
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell>
                        {comm.commit.comment_count > 0
                          ? `${comm.commit.comment_count} comment(s)`
                          : "No comments"}
                      </TableCell>
                      <TableCell>
                        <Grid
                          sx={{ alignItems: "center" }}
                          spacing={1}
                          container
                        >
                          <Grid item xs={2}>
                            <DateRangeIcon />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 900,
                                display: "center",
                              }}
                            >
                              {comm.commit.author.date}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Box>
                    <Skeleton variant="text" height={30} />
                    <Box sx={{ pt: 1, pb: 1 }}>
                      <Skeleton variant="rounded" height={150} />
                    </Box>
                  </Box>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box sx={{pt: 2, pr: 3, pb: 2, pl: 3}}>
          <Skeleton variant="text" height={40} />
          <Box sx={{ pt: 1, pb: 1 }}>
            <Skeleton variant="rounded" height={200} />
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default TableCommits;
