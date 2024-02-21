# IO Connection Interfaces

## IOConnection

Represents different equipment types connected to Dosatsu.

**Implemented By:**

-   [EmbeddedIoTIoConnection](./ioConnectionObjects.md#embedded_iot)
-   [EdgeDeviceIoConnection](./ioConnectionObjects.md#edge_device)
-   [CloudIoConnection](./ioConnectionObjects.md#cloud)

### Fields

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>A name for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>A description for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>connectionCategory</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#connectioncategory">ConnectionCategory</a>!</code></td>
        <td>The connection category</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is enabled</td>
    </tr>
    <tr>
        <td nowrap><code>connected</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is connected. An undefined value means connection status is unknown</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionMethod</code></td>
        <td nowrap><code>String</code></td>
        <td>Can use fixedFreq, auto or a custom module to detect connectivity status connectivityDetectionConfig json blob can store info needed by  connectivity detection algorithm.</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionConfig</code></td>
        <td nowrap><code>String</code></td>
        <td>The connectivity detection configuration</td>
    </tr>
    <tr>
        <td nowrap><code>implementedBy</code></td>
        <td nowrap><code>String</code></td>
        <td>e.g. MQTT, REST listener, simpleREST pulling, customModule name</td>
    </tr>
    <tr>
        <td nowrap><code>needsCertificate</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>False unless it is a device that posts with a certificate (like MQTT)</td>
    </tr>
    <tr>
        <td nowrap><code>secrets</code></td>
        <td nowrap><code>String</code></td>
        <td>Secrets</td>
    </tr>
    <tr>
        <td nowrap><code>registrationStatus</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#registrationstatus">RegistrationStatus</code></td>
        <td>One of the following values: `inProgress`, `active`</td>
    </tr>
    <tr>
        <td nowrap><code>contactEmail</code></td>
        <td nowrap><code>EmailAddress!</code></td>
        <td>Contact email for technical support</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>User who created the entry</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The last user who updated the record</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>Timestamp when the record was created</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>Timestamp when the record was last updated</td>
    </tr>
</table>

## CloudConnection

Represents an IO Connection pulling data from a 3rd party cloud.

**Implemented By:**

-   [CloudIoConnection](./ioConnectionObjects.md#cloud)

### Fields

<table>
    <tr>
        <td nowrap><code>apiVersion</code></td>
        <td nowrap><code>String</code></td>
        <td>The api version of the cloud connection</td>
    </tr>
    <tr>
        <td nowrap><code>config</code></td>
        <td nowrap><code>String</code></td>
        <td>The configuration specific to this connection type</td>
    </tr>
    <tr>
        <td nowrap><code>simpleRESTSharedConfig</code></td>
        <td nowrap><code>String</code></td>
        <td>Leave blank unless this is implemented by simpleRest</td>
    </tr>
</table>

## DirectConnection

Represents an direct Connection pulling data from an equipment.

**Implemented By:**

-   [EmbeddedIoTIoConnection](./ioConnectionObjects.md#embedded_iot)
-   [EdgeDeviceIoConnection](./ioConnectionObjects.md#edge_device)

### Fields

<table>
    <tr>
        <td nowrap><code>clientCertificate</code></td>
        <td nowrap><code>String</code></td>
        <td>A unique equipment certificate.</td>
    </tr>
    <tr>
        <td nowrap><code>clientKey</code></td>
        <td nowrap><code>String</code></td>
        <td>A unique equipment certificate key.</td>
    </tr>
    <tr>
        <td nowrap><code>publicCertificate</code></td>
        <td nowrap><code>String</code></td>
        <td>The root public key certificate.</td>
    </tr>
</table>
