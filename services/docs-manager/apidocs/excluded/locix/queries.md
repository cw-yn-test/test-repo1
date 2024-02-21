# Locix Queries

## equipment

The query to search for a specific Locix equipment is the same as querying for all other equipments.
Please refer to the [equipment](../equipmentManagement/equipmentQueries.html#equipment) query.

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipment(input: { id: "83f84e6c-7820-467e-9fcb-edbdc6de75bc" }) {
                id
                name
                ... on LocixSystem {
                    calculationStartedAt
                    calculationCompletedAt
                    predefinedPositions
                    blueprint {
                        id
                        name
                        entityId
                    }
                    anchors {
                        hardwareId
                        locixId
                        filledPositions
                        knownAnchorPositions
                    }
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "equipment": {
                "id": "83f84e6c-7820-467e-9fcb-edbdc6de75bc",
                "name": "LPS 1",
                "calculationStartedAt": "2020-08-14T01:18:07.955Z",
                "calculationCompletedAt": "2020-08-14T01:18:07.955Z",
                "predefinedPositions": [
                    [8.75, 16.36, 11.09],
                    [23.51, 16.28, 11.09],
                    [38.28, 16.28, 11.09],
                    [52.95, 16.28, 11.09]
                ],
                "blueprint": {
                    "id": "3f724bd8-b14e-4898-9f07-3029eba1ca71",
                    "name": "blueprint.png",
                    "entityId": "c5ff90a0-e19c-45c5-91ab-3cb9442e1189-blueprint"
                },
                "anchors": [
                    {
                        "hardwareId": "e8c74f0cc050",
                        "locixId": "c40e3bcc70c14390af4c20f1826a8gd5",
                        "filledPositions": [8.75, 16.36, 11.09],
                        "knownAnchorPositions": [8.75, 16.36, 11.09]
                    },
                    {
                        "hardwareId": "e8c74f0cxzdd",
                        "locixId": "8ee94c7f85ac44b9957f61440307d485",
                        "filledPositions": [23.51, 16.28, 11.09],
                        "knownAnchorPositions": null
                    },
                    {
                        "hardwareId": "e8c74f0cccs8",
                        "locixId": "680421d5615e44e1b276776eb53b5ds7",
                        "filledPositions": [38.28, 16.28, 11.09],
                        "knownAnchorPositions": null
                    },
                    {
                        "hardwareId": "e8c74f0ccxz6",
                        "locixId": "02725373c92c40bab4b7ea9472d34589",
                        "filledPositions": [52.95, 16.28, 11.09],
                        "knownAnchorPositions": null
                    }
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.html#making-plain-http-requests)"

## equipments

The query to search for Locix equipments is the same as querying for all other equipments.
Please refer to the [equipments](../equipmentManagement/equipmentQueries.html#equipments) query.

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipments(input: { page: 1, rowsPerPage: 20, name: "LPS" }) {
                id
                name
                ... on LocixSystem {
                    blueprint {
                        id
                        name
                        entityId
                    }
                    calculationStartedAt
                    calculationCompletedAt
                    predefinedPositions
                }
                ... on LocixAnchor {
                    hardwareId
                    locixId
                    knownAnchorPositions
                    filledPositions
                }
                __typename
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "equipments": [
                {
                    "id": "6cf61f45-84c8-4a99-b818-f643f46a29cb",
                    "name": "LPS 1->Anchor_0001",
                    "hardwareId": "e8c74f0cc123",
                    "locixId": "c40e3bcc70c14390af4c20f1826a8ds5",
                    "knownAnchorPositions": [8.75, 16.36, 11.09],
                    "filledPositions": [8.75, 16.36, 11.09],
                    "__typename": "LocixAnchor"
                },
                {
                    "id": "83f84e6c-7820-467e-9fcb-edbdc6de75bc",
                    "name": "LPS 1",
                    "blueprint": {
                        "id": "3f724bd8-b14e-4898-9f07-3029eba1ca71",
                        "name": "blueprint.png",
                        "entityId": "c5ff90a0-e19c-45c5-91ab-3cb9442e1189-blueprint"
                    }
                    "calculationStartedAt": "2020-08-14T01:18:07.955Z",
                    "calculationCompletedAt": "2020-08-14T01:18:07.955Z",
                    "predefinedPositions": [
                        [8.75, 16.36, 11.09],
                        [23.51, 16.28, 11.09],
                        [38.28, 16.28, 11.09],
                        [52.95, 16.28, 11.09]
                    ],
                    "__typename": "LocixSystem"
                },
                {
                    "id": "ae3d1b0c-a5c8-4a95-b857-719dcf3875e7",
                    "name": "LPS 1->Anchor_0002",
                    "hardwareId": "e8c74f0fdsaf",
                    "locixId": "8ee94c7f85ac44b9957f61440307e456",
                    "knownAnchorPositions": null,
                    "filledPositions": [23.51, 16.28, 11.09],
                    "__typename": "LocixAnchor"
                },
                {
                    "id": "c11b9baa-c941-4ac7-b0c3-16bc48e61234",
                    "name": "LPS 1->Anchor_0003",
                    "hardwareId": "e8c74f0fdaod2",
                    "locixId": "680421d5615e44e1b276776eb53b4fe2",
                    "knownAnchorPositions": null,
                    "filledPositions": [38.28, 16.28, 11.09],
                    "__typename": "LocixAnchor"
                },
                {
                    "id": "eae2ec48-7383-4769-947d-496838e55cb9",
                    "name": "LPS 1->Anchor_0004",
                    "hardwareId": "e8c74f0fdae6",
                    "locixId": "02725373c92c40bab4b7ea9472d45698",
                    "knownAnchorPositions": null,
                    "filledPositions": [52.95, 16.28, 11.09],
                    "__typename": "LocixAnchor"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.html#making-plain-http-requests)"

## getLatestAnchorsToLocationsCalculations

Fetches the latest anchor-finding calculations from the Locix cloud by calling `https://prodk.api.locix.com/pipeline/r/api/v2/client/sites/<locix_site>`

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Reference to the <a href="./objects.html#locixsystem">LocixSystem</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentData](../DataManagement/objects.html#equipmentdata)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            getLatestAnchorsToLocationsCalculations(
                input: { id: "c5ff90a0-e19c-45c5-91ab-3cb9442e1189" }
            ) {
                equipmentId
                observedAt
                rawData
                createdAt
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "getLatestAnchorsToLocationsCalculations": {
                "equipmentId": "c5ff90a0-e19c-45c5-91ab-3cb9442e1189",
                "observedAt": "2020-09-11T00:40:59.108Z",
                "rawData": {
                    "calculation_completed_at": "2020-09-11T00:54:20.783Z",
                    "predefined_positions": [
                        [8.75, 16.36, 11.09],
                        [23.51, 16.28, 11.09],
                        [38.28, 16.28, 11.09],
                        [52.95, 16.28, 11.09]
                    ]
                },
                "createdAt": "2020-09-10T01:30:58.388Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.html#making-plain-http-requests)"
