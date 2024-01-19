# LearnHub API

- API version: 2.8.3
- Package version: 1.1.5

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install @nordic-game-lab/learnhub-api
```
## usage

```javascript
import { Client } from '@nordic-game-lab/learnhub-api';

const apiKey = process.env.LearnHub;

const learnHubClient = new Client(apiKey);

const user = await learnHubClient.getUser('testuser@test.com');

console.log(user);
```
## Documentation
https://docs.nordicgamelab.org/learnhub/learnhub-node-js-sdk-documentation/