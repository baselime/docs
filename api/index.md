---
label: API Integration
order: -10
icon: globe
---

# API Integration

Integrate with Baselime to provide an exceptional observability experience for your customers out of the box.

### Step 1: Creating an Integration

To create an OAuth Integration get in touch with the Baselime Team by emailing [boris@baselime.io](mailto:boris@baselime.io). Or by signing in to the [Baselime Console](https://console.baselime.io) and going to the `/integrations` page.

The following information is required

| Field       | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| name        | The name of the integration                                       |
| description | A detailed description of the integration                         |
| logo        | A URL pointing to your logo.                                      |
| redirect    | The URL to redirect users after completing the integration setup. |


Once you have created the Integration you will receive a Client ID and Client Secret

Test the integration at `https://console.baselime.io/integrations/<your-client-id>`. 

![A Baselime Integration](../assets/images/illustrations/integration.png)

Once the user has Authorized your application they will be redirected to your redirect with the temporary authorization code in the query string parameters.

`https://www.example.com/get?code=4fa87ba8cc7f30e91ad2ab1ad21c1b3e`

!!!
The code is valid for 3 minutes.
!!!

### Step 2: Exchanging the code for an Access Token and Refresh Token

Use the temporary authorisation code to retrieve a short-lived access token for first-time access. When it's retrieved, a long-lived refresh token is also returned. The refresh token is used to generate a new access token.

#### Exchanging the code for an access token and refresh token

### Endpoint

- **Method**: `POST`
- **URL**: `https://api.baselime.io/oauth/token`

### Request

#### Headers

- **Content-Type**: `application/json`

#### Body

```json # :icon-code:
{
    "grantType": "authorization_code",
    "clientId": "<your-client-id>",
    "clientSecret": "<your-client-secret>",
    "redirect": "<your-redirect-url>",
    "code": "<oauth-code>"
}
```
- **grantType** (string): Type of grant, e.g., "authorization_code".
- **clientId** (string): Client ID for authentication.
- **clientSecret** (string): Client secret for authentication.
- **redirect** (string): Redirect URL.
- **code** (string): Authorization code.

### Response

#### HTTP Status: `200 OK`

```json # :icon-code:
{
    "accessToken": "0eg45oih65ihj4gjiojerjoi3g45j0g4",
    "refreshToken": "435huo4wwwwwhu9j4398653g9woeirjgq3984ig5whrek5ejh9jg9wehgw",
    "expiresIn": 86400,
    "tokenType": "Bearer"
}
```
- **accessToken**: JWT access token.
- **tokenType**: Type of token, e.g., "Bearer".
- **expiresIn**: Token expiration time in seconds.
- **refreshToken**: Refresh token for obtaining a new access token.


### Step 3: Exchanging the Refresh Token for an Access Token

The access token grants access for 24 hours. If you will need access for longer than that you should use the refresh token to generate a new access token. The refresh token does not expire unless access is revoked.

#### Exchanging the code for an access token and refresh token

### Endpoint

- **Method**: `POST`
- **URL**: `https://api.baselime.io/oauth/token`

### Request

#### Headers

- **Content-Type**: `application/json`

#### Body

```json # :icon-code:
{
    "grantType": "refresh_token",
    "clientId": "<your-client-id>",
    "clientSecret": "<your-client-secret>",
    "redirect": "<your-redirect-url>",
    "refreshToken": "<refresh-token>"
}
```
- **grantType** (string): Type of grant, e.g., "refresh_token".
- **clientId** (string): Client ID for authentication.
- **clientSecret** (string): Client secret for authentication.
- **redirect** (string): Redirect URL.
- **refreshToken** (string): Refresh Token.

### Response

#### HTTP Status: `200 OK`

```json # :icon-code:
{
    "accessToken": "0eg45oih65ihj4gjiojerjoi3g45j0g4",
    "expiresIn": 86400,
    "tokenType": "Bearer"
}
```
- **accessToken**: JWT access token.
- **tokenType**: Type of token, e.g., "Bearer".
- **expiresIn**: Token expiration time in seconds.


### Step 4: List Workspaces

To list the workspaces and environments for the authenticated user make a call to `https://api.baselime.io/oauth/workspaces` with the access token you just received. This endpoint also returns an `apiKey` that can be used to upload data to Baselime.

#### Listing Workspaces

### Endpoint

- **Method**: `GET`
- **URL**: `https://api.baselime.io/oauth/workspaces`

### Request

#### Headers

- **Authorization**: `Bearer <YOUR_ACCESS_TOKEN_GOES_HERE>`
- **Content-Type**: `application/json`

### Response

#### HTTP Status: `200 OK`

```json # :icon-code:
[
    {
        "workspaceId": "my-workspace",
        "environmentId": "prod",
        "apiKey": "abc123def456"
    }
]
```

- **workspaceId**: The workspace that the environment is a part of.
- **environmentId**: The environment that data will be uploaded to.
- **apiKey**: A key that can be used to upload data.
