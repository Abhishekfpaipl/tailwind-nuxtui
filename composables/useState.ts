export const useProducts = () =>
    useState("products", () => [
        {
            "sid": "harry-potter-hogwarts-history",
            "category": {
                "parent": "OverSized",
                "name": "OverSized",
                "sid": "oversized",
                "primary_image": "https://server.machiddle.com/storage/55/conversions/1710829195_2469715-category-conversion-size-400px.webp",
                "secondary_images": []
            },
            "tax": {
                "name": "100620--5%",
                "hsncode": 100620,
                "gstrate": 5
            },
            "designer": {
                "sid": "anita-dongre",
                "name": "Anita Dongre",
                "details": null,
                "image": "https://server.machiddle.com/storage/49/conversions/Anita-Dongre-designer-conversion-size-400px.webp"
            },
            "name": "Harry Potter: Hogwarts History",
            "code": "Harry Potter Hogwarts History",
            "price": "999.00",
            "mrp": "1199.00",
            "details": "Shop for Harry Potter: Hogwarts History Oversized Tshirt at The Souled Store.",
            "stock": 10,
            "boq": 1,
            "moq": 2,
            "unit": "pc",
            "active": true,
            "options": [
                {
                    "sid": "green",
                    "name": "Green",
                    "code": "#ffffff",
                    "primary_image": "https://server.machiddle.com/storage/116/conversions/file---2024-04-23T155712.495-option-conversion-size-400px.webp",
                    "secondary_images": [
                        "https://server.machiddle.com/storage/117/conversions/file---2024-04-23T155712.495-option-conversion-size-400px.webp",
                        "https://server.machiddle.com/storage/120/conversions/4MSO4543-01-3235-option-conversion-size-400px.webp"
                    ],
                    "active": true
                },
                {
                    "sid": "white",
                    "name": "white",
                    "code": "#fff",
                    "primary_image": "https://server.machiddle.com/storage/121/conversions/file---2024-04-23T155557.340-option-conversion-size-400px.webp",
                    "secondary_images": [
                        "https://server.machiddle.com/storage/122/conversions/file---2024-04-23T155557.340-option-conversion-size-400px.webp"
                    ],
                    "active": true
                }
            ],
            "ranges": [
                {
                    "sid": "large",
                    "name": "large",
                    "code": "L",
                    "active": true
                },
                {
                    "sid": "medium",
                    "name": "medium",
                    "code": "M",
                    "active": true
                },
                {
                    "sid": "small",
                    "name": "small",
                    "code": "S",
                    "active": true
                }
            ],
            "badges": [
                {
                    "sid": "produce-of-india",
                    "name": "Produce of India",
                    "details": null,
                    "image": "https://server.machiddle.com/storage/26/conversions/Make-In-India-Block-New-1-badge-conversion-size-400px.webp"
                }
            ],
            "attributes": [
                {
                    "sid": 8,
                    "name": "Material & Care:",
                    "value": "Premium Heavy Gauge Fabric 80% Cotton 20% Polyester  Machine Wash"
                },
                {
                    "sid": 9,
                    "name": "Country of Origin",
                    "value": "India (and proud)"
                }
            ]
        }
    ])