# Protobuf learn

This is a learning repository for protobuf.

## What is protobuf?

Protocol buffers are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages.

The benefit is the schema, the lightweight footprint of the stored data, as well as it being language neutral.

A drawback is the extra time and code it takes to build the proto files as well as having to be forced to have a schema.
## Getting set up

We need to download [protobuf](https://developers.google.com/protocol-buffers/docs/downloads) as  `google-protobuf` runtime.
## Convert using protoc

In this example we are using a `javascript` example. First check out `index.js` for the example without protobuf.

To set up `index2.js` for protobuf we create `employees.proto` first.

After creating the protobuf file that defines the schema, we can convert to the langauge that we are planning to use it in. Here we are using `javascript`. The output will create a new file `employees_pb.js` which will contain `js` code.

```bash
protoc --js_out=import_style=commonjs,binary:. employees.proto
```

Once `employees_pb.js` is created it can be used and imported in the `js` file.
## Resources

Protocol Buffers: https://developers.google.com/protocol-buffers
Protocol Buffers Github: https://github.com/protocolbuffers/protobuf