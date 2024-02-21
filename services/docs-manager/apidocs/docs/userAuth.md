# User Authentication & Authorization

This documentation provides the information for User Authentication and Authorization.

## Prerequisites

Following are required to obtain your [access token](#access-token):

<table>
    <tr>
        <td nowrap><b>Username & Password</b></td>
        <td nowrap>Please register an account at <a href="https://test1.daikinlab.com/app" target="_blank">Dosatsu</a> for your <code>username</code> and <code>password</code>.</td>
    </tr>
    <tr>
        <td><b>Client ID & Secret</b></td>
        <td>Please reach out to the Dosatsu team to obtain your <code>client_id</code> and <code>client_secret</code>.</td>
    </tr>
</table>

## Access Token

In order to obtain your <code>JWT access token</code>, please utilize any REST API client or library and make the following request:

##### Request

<table>
    <tr>
        <td nowrap><b>URI</b></td>
        <td><code>https://sso.daikinlab.com/auth/realms/daikin/protocol/openid-connect/token</code></td>
    </tr>
    <tr>
        <td nowrap><b>Method</b></td>
        <td><code>POST</code></td>
    </tr>
    <tr>
        <td nowrap><b>Headers</b></td>
        <td><code>Content-Type: application/x-www-form-urlencoded</code></td>
    </tr>
    <tr>
        <td nowrap><b>Body</b></td>
        <td>
            <table>
                <tr>
                    <th nowrap>Key</th>
                    <th nowrap>Value</th>
                </tr>
                <tr>
                    <td nowrap><code>grant_type</code></td>
                    <td><code>password</code></td>
                </tr>
                <tr>
                    <td nowrap><code>username</code></td>
                    <td><em>Your Dosatsu username.</em></td>
                </tr>
                <tr>
                    <td nowrap><code>password</code></td>
                    <td><em>Your Dosatsu password.</em></td>
                </tr>
                <tr>
                    <td nowrap><code>client_id</code></td>
                    <td><em>Your Client ID.</em></td>
                </tr>
                <tr>
                    <td nowrap><code>client_secret</code></td>
                    <td><em>Your Client Secret.</em></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

##### Response

!!! success "Sample Response"

    ```
    {
        "access_token": "eyJhbGciOiJSUzUxMiIsInR5cCIgOiAiSldUIiwib2lkIiA6ICI1YlNibjgxOFU4bXJ4TU5ScC1ha3FndTVyRVNhUmFaV1ZXQkZwQUkxN2ZnIn0.eyJqdGkiOiI5ZWYyNTUxMC1jYmFkLTRiNzYtODg4My03MDUxMDQ5OWYyODEiLCJleHAiOjE1ODg3MDUwNzYsIm5iZiI6MCwiaWF0IjoxNTg4NzA0NDc2LCJpc3MiOiJodHRwczovL3Nzby5kYWlraW5sYWIuY29tL2F1dGgvcmVhbG1zL2RhaWtpbiIsImF1ZCI6ImRhaWtpbiIsInN1YiI6IjMxNzEzNTMyLTY4ZTctNDEwZi04NTc1LTk1MmRmOTE0OWM3NyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImRhaWtpbiIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImMxZTBmODVmLWQxZGItNDdjYS1hNzRjLTE3OGFkZjY0ZWIxYyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly90ZXN0MS5kYWlraW5sYWIuY29tL2FwcCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGFpa2luLXJvbGUiXX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCBoZWxsby1zZXJ2aWNlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiU0FHQVIgR0FUVEVQQUxMWSIsInByZWZlcnJlZF91c2VybmFtZSI6ImJ1aWxkaW5nYSIsImxvY2FsLSI6ImVuIiwiZ2l2ZW5fbmFtZSI6IlNBR0FSIiwiZmFtaWx5X25hbWUiOiJHQVRURVBBTExZIiwiZW1haWwiOiJidWlsZGluZ2FAZ21haWwuY29tIn0.B241kTQOtlft9Cs-Yf3wxCG_FFy08Wjw4UqxgIYBmrgQVP1ygnrPWr-Lp2NAwEjuQnlfRuCTcVujpCZ26Jopz0ka0EDAlnJl7haczIejPG5JwVGuULhomIBPkVcSk8hXJ_OYluQ5w6pl91s-fwdUyH-u-c6Q8V80RO7dx3S_5P8F3ZyId35IUhzevzrTJhVn7JC3rD6w69HH5VVK2PuWCZuG4UqkziWq1SYWpHY9PsIt190i9jceAvsCjAem9_5G3BHOlRUpiPMOi_CnlWiLY3HXziLPJSB_4Lnwtk87q0CyejSrSGnwzACozAfoqowEnBQpZqDKG4QP2R3_Yz1Kqo",
        "expires_in": 600,
        "refresh_expires_in": 600,
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSddUIiwia2lkIiA6ICJhNjhlYjUzNS00NmY4LTQwN2UtODIzNS1iN2ZmNTE1MzJiMjIifQ.eyJqdGkiOiJlMWQyYmYzYS1lZmExLTQzZDUtODU2Zi1hMGQ1NDE1MDdlOTkiLCJleHAiOjE1ODg6MDUwNzYsIm5iZiI6MCwiaWF0IjoxNTg4NzA0NDc2LCJpc3MiOiJodHRwczovL3Nzby5kYWlraW5sYWIuY29tL2F1dGgvcmVhbG1zL2RhaWtpbiIsImF1ZCI6Imh0dHBzOi8vc3NvLmRhaWtpbmxhYi5jb20vYXV0aC9yZWFsbXMvZGFpa2luIiwic3ViIjoiMzE3MTM1MzItNjhlNy00MTAmLTg1NzUtOTUyZGY5MTQ5Yzc3IiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImRhaWtpbiIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImMxZTBmODVmLWQxZGItNDdjYS1hNzRjLTE3OGFkZjY0ZWIxYyIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkYWlraW4tcm9sZSJdfSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIGhlbGxvLXNlcnZpY2UifQ.xgsVBEtOvk03BBCNmwE1YlGveOu4e2yJMxMdCjWtOua",
        "token_type": "bearer",
        "not-before-policy": 1587831911,
        "session_state": "c1e0f85f-d1db-47ca-a74c-178adf64eb1c",
        "scope": "profile email hello-service"
    }
    ```

## Renew Token

If you would like to renew your <code>JWT access token</code>, you can utilize your <code>refresh_token</code> and make the following request:

##### Request

<table>
    <tr>
        <td nowrap><b>URI</b></td>
        <td><code>https://sso.daikinlab.com/auth/realms/daikin/protocol/openid-connect/token</code></td>
    </tr>
    <tr>
        <td nowrap><b>Method</b></td>
        <td><code>POST</code></td>
    </tr>
    <tr>
        <td nowrap><b>Headers</b></td>
        <td><code>Content-Type: application/x-www-form-urlencoded</code></td>
    </tr>
    <tr>
        <td nowrap><b>Body</b></td>
        <td>
            <table>
                <tr>
                    <th nowrap>Key</th>
                    <th nowrap>Value</th>
                </tr>
                <tr>
                    <td nowrap><code>grant_type</code></td>
                    <td><code>refresh_token</code></td>
                </tr>
                <tr>
                    <td nowrap><code>client_id</code></td>
                    <td><em>Your Client ID.</em></td>
                </tr>
                <tr>
                    <td nowrap><code>client_secret</code></td>
                    <td><em>Your Client Secret.</em></td>
                </tr>
                <tr>
                    <td nowrap><code>refresh_token</code></td>
                    <td><em>Your </em><code>refresh_token</code><em> obtained from the </em><a href="#access-token">access token</a><em> or </em><a href="#renew-token">renew token</a><em> response.</em></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

##### Response

!!! success "Sample Response"

    ```
    {
        "access_token": "eyJhbGciOiJSUzUxMiIsInR5cCIgOiAiSldUIiwia2dkIiA6ICI1YlNibjgxOFU4bXJ4TU5ScC1ha3FndTVyRVNhUmFaV1ZXQkZwQUkxN2ZnIn0.eyJqdGkiOiI0YjQzOTk3NS0yODhmLTRkM2UtYWIzMC0xNWE5N2U3NjJjYTYiLCJleHAiOjE1ODg3OTMzMjMsIm5iZiI6MCwiaWF0IjoxNTg4NzkyNzM5LCJpc3MiOiJodHRwczovL3Nzby5kYWlraW5sYWIuY29tL2F1dGgvcmVhbG1zL2RhaWtpbiIsImF1ZCI6ImRhaWtpbiIsInN1YiI6IjMxNzEzNTMyLTY4ZTctNDEwZi04NTc1LTk1MmRmOTE0OWM3NyIsInR5cCI6IkJlYXJlciIsImF6cCI2ImRhaWtpbiIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjY2NTdjZTcyLTNiZTktNGE4Ni05MjBkLTAwY2QxNmVlYmFmZCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly90ZXN0MS5kYWlraW5sYWIuY29tL2FwcCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGFpa2luLXJvbGUiXX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCBoZWxsby1zZXJ2aWNlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiU0FHQVIgR0FUVEVQQUxMWSIsInByZWZlcnJlZF91c2VybmFtZSI6ImJ1aWxkaW5nYSIsImxvY2FsZSI6ImVuIiwiZ2l2ZW5fbmFtZSI6IlNBR0FSIiwiZmFtaWx5X25hbWUiOiJHQVRURVBBTExZIiwiZW1haWwiOiJidWlsZGluZ2FAZ21haWwuY29tIn0.GUwNskkx6wE4EG-mPlmjPxCjoXwcXX0-BD73XAR64xVpyFjJkjjWqil8KC-9mT4-4mupHrt-fIn54MM6EgCCVy68g1UO6FnmapY067lfyjAcaUU9ZnitUXUZpQ9SR6tH8fO0ReqJ5cvh3NjwnyDdeeC3TvCWd2p2nCY3QUiO4D1cFpDnt16G-zXuF7Jmbtbj8iXIaQ6UlFkmYqrmxvrPK_rxo76DVC8ec6ZcykUB4xbhk4oezLa6wtx81OL2fGjvBWYdyOaheCuYWDZbBAhMyLlOW9FwKQIjILbhJzmwhAPtrdmVC8Vu9aODM7lVD5-l-P-yaibkRsKCC9lSXF48PQ",
        "expires_in": 584,
        "refresh_expires_in": 584,
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIhOiAiSldUIiwia2lkIiA6ICJhNjhlYjUzNS00NmY4LTQwN2UtODIzNS1iN2ZmNTE1MzJiMjIifQ.eyJqdGkiOiI4ZTk0ODYzOS05MTEyLTQ3ZGQtYmMwYi02YWQ0M2Q1Mzk5ZDUiLCJleHAiOjE1ODg3OTMzMjMsIm5iZiI7MCwiaWF0IjoxNTg4NzkyNzM5LCJpc3MiOiJodHRwczovL3Nzby5kYWlraW5sYWIuY29tL2F1dGgvcmVhbG1zL2RhaWtpbiIsImF1ZCI6Imh0dHBzOi8vc3NvLmRhaWtpbmxhYi5jb20vYXV0aC9yZWFsbXMvZGFpa2luIiwic3ViIjoiMzE3MTM1MzItNjhlNy00MTBmLTg1NzUtOTUyZGY5MTQ5Yzc3IiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImRhaWtpbiIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjY2NTdjZTcyLTNiZTktNGE4Ni05MjBkLTAwY2QxNmVlYmFmZCIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkYWlraW4tcm9sZSJdfSwic2NvcGUiOiJwcm9caWxlIGVtYWlsIGhlbGxvLXNlcnZpY2UifQ.cs4YyTCAjg6anb-RIxGDH9Mi9Yv6a5Oi38JjcVE8MlJ",
        "token_type": "bearer",
        "not-before-policy": 1587831911,
        "session_state": "6657ce72-3be9-4a86-920d-00cd16eebafd",
        "scope": "profile email hello-service"
    }
    ```

## Token Usage

The <code>JWT access token</code> can then be utilized to make various requests to Dosatsu as indicated throughout this API documentation through the means of GraphQL and HTTP.

<table>
    <th nowrap>URI</th>
    <th nowrap>Method</th>
    <th nowrap>Headers</th>
    <th></th>
    <tr>
        <td nowrap><code>https://test1.daikinlab.com/api</code></td>
        <td nowrap><code>POST</code></td>
        <td nowrap><code>Content-Type</code><br/><code>Authorization</code></td>
        <td nowrap><code>application/json</code><br/><em>Your JWT Access Token.</em</td>
    </tr>
    <tr>
        <td nowrap><code>https://test1.daikinlab.com/data</code></td>
        <td nowrap><code>POST</code></td>
        <td nowrap><code>Content-Type</code><br/><code>Authorization</code></td>
        <td nowrap><code>application/json</code><br/><em>Your JWT Access Token.</em</td>
    </tr>
</table>

!!! example "Sample Body"

    === "GraphQL"
        ```
        {
            equipmentTypes {
                id
                name
            }
        }
        ```

!!! success "Sample Response"
    ```
    {
        "data": {
            "equipmentTypes": [
                {
                    "id": "75e2725e-5132-414a-abf5-5e58d577518a",
                    "name": "equipment_ad0d54f0-83db-11ea-a929-9743d967aca8"
                },
                {
                    "id": "41d234a4-fed5-461a-bb0c-ca358638ee28",
                    "name": "equipment_d3e06e90-8963-11ea-88ae-e78df2c2ad85"
                },
                {
                    "id": "638c4aff-3228-4bac-8cf3-3639d11bcd4f",
                    "name": "equipment_d0dc18e0-8eed-11ea-b991-5d87741cbfd0"
                },
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](./index.md#making-plain-http-requests)"