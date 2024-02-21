# Simple REST Configuration Objects

## Simple REST Configuration

Represents a simple REST configuration

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>connectionModule</code></td>
        <td nowrap><code>String</code></td>
        <td>Specifies which node module to use for establishing connections. This plugable architecture has the same pattern as parsers.</td>
    </tr>
    <tr>
        <td nowrap><code>config</code></td>
        <td nowrap><code>String</code></td>
        <td>Simple REST Configuration. We support both YAML and JSON configs.</td>
    </tr>
    <tr>
        <td nowrap><code>pullFreqSec</code></td>
        <td nowrap><code>String</code></td>
        <td>Pull frequency in seconds</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The user who last modified this entry</td>
    </tr>
    <tr>
        <td nowrap><code>lastUpdatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The user who last modified this entry</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was created</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was updated</td>
    </tr>

</table>
