"use client";
import React from "react";
import Link from "@mui/material/Link";
import { Typography, Box, Breadcrumbs } from "@mui/material";
import { useRouter } from "next/navigation";
import { capitalizeBreadcrumbs, capitalizeBreadcrumbLast } from "@/application/utils/stringUtils";

const getBreadcrumb = (segment: string, index: number, segments: string[]) => {

  const url = `/${segments.slice(0, index + 1).join("/")}`;

  let displayText = capitalizeBreadcrumbs(segment);
  const lastPageIndex = segments.length - 2;

  if (index === segments.length - 1 && /^[0-9a-zA-Z]+$/.test(segment) && lastPageIndex >= 0) {
    displayText = capitalizeBreadcrumbLast(segments[lastPageIndex]);
  }

  return { displayText, url };
}

const SubHeader: React.FC = () => {
  const [segments, setSegments] = React.useState<string[]>([]);
  const router = useRouter();

  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    url: string
  ) {
    event.preventDefault();
    console.info("You clicked a breadcrumb:", url);
    window.location.assign(url);
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.split("/").filter(Boolean);
      setSegments(path);
    }
  }, []);

  return (
    <Box sx={{ pt: 4 }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link
          key="dashboard"
          underline="hover"
          color="inherit"
          onClick={(e) => handleClick(e, "/")}
        >
          Dashboard
        </Link>
        {segments && segments.map((segment, index) => {
          const { displayText, url } = getBreadcrumb(segment, index, segments);

          return index === segments.length - 1 ? (
            <Typography key={index} color="text.primary">
              {displayText}
            </Typography>
          ) : (
            <Link
              key={segment}
              underline="hover"
              color="inherit"
              onClick={(e) => handleClick(e, url)}
            >
              {displayText}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default SubHeader;
