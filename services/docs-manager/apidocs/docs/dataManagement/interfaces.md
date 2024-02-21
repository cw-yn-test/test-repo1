# Data Interfaces

## EquipmentData

Represents posted data from an [Equipment](../equipmentManagement/equipmentObjects.md#equipment)

**Implemented By:**

-   [TimeSeriesData](./objects.md#timeseriesdata)
-   [LastReadings](./objects.md#lastreadings)

### Fields

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>equipmentId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>observedAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>Time the data was received</td>
    </tr>
    <tr>
        <td nowrap><code>rawData</code></td>
        <td nowrap><code>JSONObject!</code></td>
        <td>Data reading</td>
    </tr>
</table>