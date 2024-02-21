# Equipment Enums

## DataPointType

The possible type of [DataPoint](./equipmentObjects.md#datapoint).

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>float</code></td>
        <td>A numeric value</td>
    </tr>
    <tr>
        <td nowrap><code>string</code></td>
        <td>A text value</td>
    </tr>
    <tr>
        <td nowrap><code>boolean</code></td>
        <td>A boolean value. <code>true</code> or <code>false</code></td>
    </tr>
</table>

## Language

`ISO 639-1` 2 characters, one per language or [ISO 639 macrolanguage](https://en.wikipedia.org/wiki/ISO_639_macrolanguage).
"ISO 639 macrolanguage" is where a language is considered to be a dialect of another in some standards but not in others, e.g Standard Arabic and Arabic. There's more information on the [Wikipedia page](https://en.wikipedia.org/wiki/ISO_639_macrolanguage).

## EquipmentsOrderBy

The supported orderBy values for searching for [Equipment](./equipmentInterfaces.md#equipmentinterface)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>NAME_ASC</code></td>
        <td>Sort in ascending order by the equipment's name</td>
    </tr>
    <tr>
        <td nowrap><code>NAME_DESC</code></td>
        <td>Sort in descending order by the equipment's name</td>
    </tr>
    <tr>
        <td nowrap><code>REPORTING_ASC</code></td>
        <td>Sort in ascending order by the equipment's reporting status</td>
    </tr>
    <tr>
        <td nowrap><code>REPORTING_DESC</code></td>
        <td>Sort in descending order by the equipment's reporting status</td>
    </tr>
     <tr>
        <td nowrap><code>LAST_REPORTED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the equipment was last reported</td>
    </tr>
    <tr>
        <td nowrap><code>LAST_REPORTED_AT_DESC</code></td>
        <td>Sort in descending order by the time the equipment was last reported</td>
    </tr>
    <tr>
        <td nowrap><code>FREQUENCY_ASC</code></td>
        <td>Sort in ascending order by the equipment's frequency</td>
    </tr>
    <tr>
        <td nowrap><code>FREQUENCY_DESC</code></td>
        <td>Sort in descending order by the equipment's frequency</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the equipment was created</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_DESC</code></td>
        <td>ort in descending order by the time the equipment was created</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the equipment was most recently updated</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the equipment was most recently updated</td>
    </tr>
</table>

## DataModelsOrderBy

The supported orderBy values for searching for [DataModel](./equipmentObjects.md#datamodel)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>NAME_ASC</code></td>
        <td>Sort in ascending order by the Data Model's name</td>
    </tr>
    <tr>
        <td nowrap><code>NAME_DESC</code></td>
        <td>Sort in descending order by the Data Model's name</td>
    </tr>
    <tr>
        <td nowrap><code>LOCKED_ASC</code></td>
        <td>Sort in ascending order by if the Data Model is locked</td>
    </tr>
    <tr>
        <td nowrap><code>LOCKED_DESC</code></td>
        <td>Sort in descending order by if the Data Model is locked</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the Data Model was created</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_DESC</code></td>
        <td>ort in descending order by the time the Data Model was created</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the Data Model was most recently updated</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the Data Model was most recently updated</td>
    </tr>
</table>
