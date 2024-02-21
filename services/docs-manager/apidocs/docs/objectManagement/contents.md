# Contents API

Contents API manages the uploaded Object content.

## GET

Retrieve the actual Object by the specified ID.

##### REQUEST

<table>
    <tr>
        <td nowrap><b>URI</b></td>
        <td><code>http://test1.daikinlab.com/api/v1/contents/<b>{id}</b></code></td>
    </tr>
    <tr>
        <td nowrap><b>Method</b></td>
        <td><code>GET</code></td>
    </tr>
    <tr>
        <td nowrap><b>Headers</b></td>
        <td>
            Required:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td nowrap><code>Content-Type</code></td>
                    <td><code>String</code></td>
                    <td><code>application/json</code></td>
                </tr>
                <tr>
                    <td nowrap><code>Authorization</code></td>
                    <td><code>String</code></td>
                    <td><em>JWT Token</em></td>
                </tr>
            </table>
    </tr>
    <tr>
        <td nowrap><b>Path</b></td>
        <td>
            Required:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td><code>id</code></td>
                    <td><code>String</code></td>
                    <td><em>ID of the Object.</em></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

##### RESPONSE

!!! info "Response Codes"

    <table>
        <th>Code</th>
        <th>Description</th>
        <tr>
            <td>201</td>
            <td>Object to download</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request (<code>INVALID_OBJECT_ID</code>)</td>
        </tr>
        <tr>
            <td>401</td>
            <td>Unauthorized (<code>INVALID_JWT_TOKEN</code>)</td>
        </tr>
    </table>
