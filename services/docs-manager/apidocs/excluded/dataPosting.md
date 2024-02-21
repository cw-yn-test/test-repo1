# Data Posting

In order to post data to your device, please utilize any REST API client or library and make the following request:

##### Request

<table>
    <tr>
        <td nowrap><b>URI</b></td>
        <td><code>http://test1.daikinlab.com/data</code></td>
    </tr>
    <tr>
        <td nowrap><b>Method</b></td>
        <td><code>POST</code></td>
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
                <tr>
                    <td nowrap><code>deviceref</code></td>
                    <td><code>String</code></td>
                    <td><em>ID of the device for the posted data.</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td nowrap><b>Body</b></td>
        <td><em>Data object to be posted.</em></td>
    </tr>
</table>

##### RESPONSE

!!! success "Sample Response"

    ```
    {
        "category_name": "Allergen Count",
        "category_color": "blue",
        "parameter_name": "Alternaria Mold",
        "log_value": 26,
        "particle_category": "1",
        "env_index": "4",
        "log_unit": "particles",
        "log_intensity": "Moderate",
        "t": "2019-06-11T00:00",
        "networkRef": "111-000-111"
    }
    ```

!!! info "Response Codes"

    <table>
        <th>Code</th>
        <th>Description</th>
        <tr>
            <td>200</td>
            <td>Data posted successfully</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request (<code>BLOCKED_DEVICE</code>, <code>INVALID_DEVICE_REF</code>)</td>
        </tr>
        <tr>
            <td>401</td>
            <td>Unauthorized (<code>INVALID_JWT_TOKEN</code>)</td>
        </tr>
    </table>
