# Locix Objects

## LocixSystem

Represents a locix system.

Implements [EquipmentInterface](../equipmentmanagement/equipmentInterfaces.html#equipmentinterface)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>anchors</code></td>
        <td nowrap><code>[<a href="#locixanchor">LocixAnchor</a>!]</code></td>
        <td>List of associated locix anchors</td>
    </tr>
    <tr>
        <td nowrap><code>blueprint</code></td>
        <td nowrap><code><a href="../objectManagement/objects.html#fileupload">FileUpload</a></code></td>
        <td>Locix site blueprint</td>
    </tr>
    <tr>
        <td nowrap><code>calculationStartedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>The last known time an anchor-finding sequence has been initiated</td>
    </tr>
    <tr>
        <td nowrap><code>calculationCompletedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>The last known time an anchor-finding sequence has been completed</td>
    </tr>
    <tr>
        <td nowrap><code>predefinedPositions</code></td>
        <td nowrap><code>[[Float!]!]</code></td>
        <td>A list of predefined anchor positions</td>
    </tr>
</table>

## LocixAnchor

Represents an anchor of a locix system.

Implements [EquipmentInterface](../equipmentmanagement/equipmentInterfaces.html#equipmentinterface)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>hardwareId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Reference to the associated hardware equipment</td>
    </tr>
    <tr>
        <td nowrap><code>locixId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>The ID from the locix cloud</td>
    </tr>
    <tr>
        <td nowrap><code>knownAnchorPositions</code></td>
        <td nowrap><code>[Float!]</code></td>
        <td>The position configured to the anchor</td>
    </tr>
    <tr>
        <td nowrap><code>filledPositions</code></td>
        <td nowrap><code>[Float!]</code></td>
        <td>The predicted anchor position</td>
    </tr>
</table>
