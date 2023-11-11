import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommitsEntity } from 'src/commons/domain/entities/commits.entity';
import { ApiGitHubResponse } from 'src/commons/domain/dtos/api/github-api-response';
import { IGithubRequestHandler } from 'src/commons/infrastructure/handlers/github-api-handler/github-rq-handler.interface';
import { GithubRequestHandler } from 'src/commons/infrastructure/handlers/github-api-handler/github-rq-handler.service';
import { ICommitsService } from './commits.interface';
import { CommitEntity } from 'src/commons/domain/entities/commit.entity';

@Injectable()
export class CommitsService implements ICommitsService {
  constructor(
    @Inject(GithubRequestHandler)
    private readonly githubRequestHandler: IGithubRequestHandler,
    private configService: ConfigService
  ) {}

  async getCommits(repoName: string, page?: number, per_page?: number): Promise<CommitsEntity[]> {

    const baseUrl = this.configService.get<string>('API_BASE_URL');
    const user = this.configService.get<string>('API_USER');

    const params: any = { repoName };
    if (page != null && per_page != null) {
      params.page = page;
      params.per_page = per_page;
    }

    const response: ApiGitHubResponse<CommitsEntity[]> = await this.githubRequestHandler.Get(`${baseUrl}/repos/${user}/${repoName}/commits`, {
      params
    });

    return response.data;
  }

  async getCommitsPerBranch(repoName: string, sha: string, page?: number, per_page?: number): Promise<CommitsEntity[]> {
    const baseUrl = this.configService.get<string>('API_BASE_URL');
    const user = this.configService.get<string>('API_USER');

    const params: any = { repoName };
    params.sha = sha;
    if (page != null && per_page != null) {
      params.page = page;
      params.per_page = per_page;
    }

    const response: ApiGitHubResponse<CommitsEntity[]> = await this.githubRequestHandler.Get(`${baseUrl}/repos/${user}/${repoName}/commits`, {
      params
    });

    return response.data;
  }

  async getCommit(repoName: string, sha: string): Promise<CommitEntity> {
    const baseUrl = this.configService.get<string>('API_BASE_URL');
    const user = this.configService.get<string>('API_USER');

    const response: ApiGitHubResponse<CommitEntity> = await this.githubRequestHandler.Get(`${baseUrl}/repos/${user}/${repoName}/commits/${sha}`);

    return response.data;
  }
}