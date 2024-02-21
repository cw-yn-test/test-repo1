# IO Connection Enums

## ConnectionCategory

[IO Connection](./ioConnectionInterfaces.md#ioconnection) connection categories

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>EMBEDDED_IOT</code></td>
        <td>Single equipment for this connection.</td>
    </tr>
    <tr>
        <td nowrap><code>EDGE_DEVICE</code></td>
        <td>One or more equipment connected in a system.</td>
    </tr>
    <tr>
        <td nowrap><code>CLOUD</code></td>
        <td>Links to bulk iot gizmo via 3rd party cloud.</td>
    </tr>
</table>

## RegistrationStatus

[IO Connection](./ioConnectionInterfaces.md#ioconnection) registration status

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>inProgress</code></td>
        <td>Registration status is in progress</td>
    </tr>
    <tr>
        <td nowrap><code>active</code></td>
        <td>Registration status is active</td>
    </tr>

</table>

## IoConnectionsOrderBy

The supported orderBy values for searching for [IoConnection](./ioConnectionInterfaces.md#ioconnection)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>NAME_ASC</code></td>
        <td>Sort in ascending order by the IO Connection's name</td>
    </tr>
    <tr>
        <td nowrap><code>NAME_DESC</code></td>
        <td>Sort in descending order by the IO Connection's name</td>
    </tr>
    <tr>
        <td nowrap><code>CONNECTED_ASC</code></td>
        <td>Sort in ascending order if the IO Connection is connected</td>
    </tr>
    <tr>
        <td nowrap><code>CONNECTED_DESC</code></td>
        <td>Sort in descending order if the IO Connection is connected</td>
    </tr>
        <tr>
        <td nowrap><code>CONNECTION_CATEGORY_ASC</code></td>
        <td>Sort in ascending order by the IO Connection's <a href="#connectioncategory">Connection Category</a></td>
    </tr>
    <tr>
        <td nowrap><code>CONNECTION_CATEGORY_DESC</code></td>
        <td>Sort in descending order by the IO Connection's <a href="#connectioncategory">Connection Category</a></td>
    </tr>
    <tr>
        <td nowrap><code>CONNECTIVITY_DETECTION_METHOD_ASC</code></td>
        <td>Sort in ascending order by the IO Connection's Connectivity Detection Method</td>
    </tr>
    <tr>
        <td nowrap><code>CONNECTIVITY_DETECTION_METHOD_DESC</code></td>
        <td>Sort in descending order by the IO Connection's Connectivity Detection Method</td>
    </tr>
    <tr>
        <td nowrap><code>ENABLED_ASC</code></td>
        <td>Sort in ascending order if the IO Connection is enabled</td>
    </tr>
    <tr>
        <td nowrap><code>ENABLED_DESC</code></td>
        <td>Sort in descending order if the IO Connection is enabled</td>
    </tr>
    <tr>
        <td nowrap><code>NEEDS_CERTIFICATE_ASC</code></td>
        <td>Sort in ascending order if the IO Connection needs certificate</td>
    </tr>
    <tr>
        <td nowrap><code>NEEDS_CERTIFICATE_DESC</code></td>
        <td>Sort in descending order if the IO Connection needs certificate</td>
    </tr>
    <tr>
        <td nowrap><code>REGISTRATION_STATUS_ASC</code></td>
        <td>Sort in ascending order by the IO Connection's <a href="#registrationstatus">Registration Status</a></td>
    </tr>
    <tr>
        <td nowrap><code>REGISTRATION_STATUS_DESC</code></td>
        <td>Sort in descending order by the IO Connection's <a href="#registrationstatus">Registration Status</a></td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the IO Connection was created</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_DESC</code></td>
        <td>ort in descending order by the time the IO Connection was created</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the IO Connection was most recently updated</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the IO Connection was most recently updated</td>
    </tr>
</table>
