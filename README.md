# Node List Queue Memebers Tutorial

This project serves as a guide to help you build an application with Persephony. Specifically, the project will:

- List the callers that are members of the specified queue   

## Setting up your new app within your Persephony account

To get started using a persephony account, follow the instructions [here](https://persephony-docs.readme.io/docs/getting-started-with-persephony).

## Setting up the List Queue Memebers Tutorial

1. Install the node packages necessary using command:

   ```bash
   $ yarn install
   ```

2. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                             |
   | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | accountId              | Account ID which can be found under [API Keys](https://www.persephony.com/dashboard/portal/account/authentication) in Dashboard                                                         |
   | authToken              | Authentication Token which can be found under [API Keys](https://www.persephony.com/dashboard/portal/account/authentication) in Dashboard                                               |

3. Provide a value for the variable `queueId` which is the id of the queue you wish to list the members of. To learn more about queue go [here](https://docs.persephony.com/reference/call-queues).

## Runnning the Tutorial

1. Run the application using command:

   ```bash
   $ node listMemebers.js
   ```

