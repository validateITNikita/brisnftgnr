const
    { ArtEngine,
        exporters,
        generators,
        inputs,
        renderers
    } = require("@hashlips-lab/art-engine");

    let BASE_PATH = __dirname;

    const ae = new ArtEngine({
        cachePath: `${BASE_PATH}/cache`,

        outputPath : `${BASE_PATH}/output`,

        inputs : {
            Animals : new inputs.ImageLayersInput({
                assetsBasePath : `${BASE_PATH}/layers`,
            })
        },

        generators : [
            new generators.ImageLayersAttributesGenerator({
                dataSet : "Animals",
                startIndex : "1",
                endIndex : "100"
            })
        ],

        renderers : [
            new renderers.ItemAttributesRenderer({
                name : "",
                description : ""
            }),
            new renderers.ImageLayersRenderer({
                width : 2000,
                height : 2000
            }),

        ],

        exporters : [
            new exporters.ImagesExporter(),
            new exporters.Erc721MetadataExporter({
                imageUriPrefix: "CHANGE",
                metadataFolder : "/metadata/"
            })
        ]

    });

    ae.run();