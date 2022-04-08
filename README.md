# Deploy-api-client

## Generate new api
- Replace swagger file with new version, for example from https://dev-deploy.heretto.com/v3/api-docs.
- Open terminal in main catalog and execute
```npm run generate```
- Change version in package.json.
- Push to npmjs.

## How to use api
- Add api to dependencies.
- Create api object:
```typescript
const api = new DeployApi({
  baseURL: URL_TO_DEPLOY_API
});
```
- Call endpoint (for example to get content):
```typescript
api.content.content(ORG_ID, DEPLOYMENT_ID, {token: TOKEN, "for-path": "topic2"})
.then(r => {
  console.log(r.data);
})

```
- For endpoints which url starts with "/org", use api.org, for bookmarks - api.bookmarks

## templates catalog
According to https://www.npmjs.com/package/swagger-typescript-api class for api will be always "Api".
To have the class DeployApi https://github.com/acacode/swagger-typescript-api/blob/next/templates/default/api.eta was copied to templates/api.eta and modified to have name DeployApi instead of Api. 
