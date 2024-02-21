# Organization Objects

## Organization

Represents an organization

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>alternativeName</code></td>
        <td nowrap><code>String</code></td>
        <td>Alternative name of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>isCompany</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether the Organization is a company or not</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>website</code></td>
        <td nowrap><code>String</code></td>
        <td>Website URL of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>primaryContact</code></td>
        <td nowrap><code><a href="#contact">Contact</a></code></td>
        <td>Primary contact of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>parentOrg</code></td>
        <td nowrap><code><a href="#organization">Organization</a></code></td>
        <td>Parent Organization of this Organization</td>
    </tr>
    <tr>
        <td nowrap><code>address</code></td>
        <td nowrap><code><a href="../locationManagement/objects.html#address">Address</a></code></td>
        <td>Address of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>countryCode</code></td>
        <td nowrap><code>CountryCode</code></td>
        <td>Country code of the Organization's location</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>contacts</code></td>
        <td nowrap><code>[<a href="#contact">Contact</a>!]!</code></td>
        <td>List of contacts of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>childOrgs</code></td>
        <td nowrap><code>[<a href="#organization">Organization</a>!]!</code></td>
        <td>List of child Organizations of this Organization</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who created this entry</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
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

## Contact

Represents a contact

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>email</code></td>
        <td nowrap><code>EmailAddress!</code></td>
        <td>E-mail address of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>phone</code></td>
        <td nowrap><code>String</code></td>
        <td>Phone number of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>isCompany</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether the Contact is a company or not</td>
    </tr>
    <tr>
        <td nowrap><code>organization</code></td>
        <td nowrap><code><a href="#organization">Organization</a></code></td>
        <td>Organization the Contact belongs to</td>
    </tr>
    <tr>
        <td nowrap><code>user</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The Contact's Dosatsu user information</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who created this entry</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
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
