/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./VotingForm_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.VotingClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.VotingPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.VotingForm,
 *   !proto.Response>}
 */
const methodDescriptor_Voting_CreateForm = new grpc.web.MethodDescriptor(
  '/Voting/CreateForm',
  grpc.web.MethodType.UNARY,
  proto.VotingForm,
  proto.Response,
  /**
   * @param {!proto.VotingForm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.VotingForm,
 *   !proto.Response>}
 */
const methodInfo_Voting_CreateForm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Response,
  /**
   * @param {!proto.VotingForm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Response.deserializeBinary
);


/**
 * @param {!proto.VotingForm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.VotingClient.prototype.createForm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Voting/CreateForm',
      request,
      metadata || {},
      methodDescriptor_Voting_CreateForm,
      callback);
};


/**
 * @param {!proto.VotingForm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Response>}
 *     A native promise that resolves to the response
 */
proto.VotingPromiseClient.prototype.createForm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Voting/CreateForm',
      request,
      metadata || {},
      methodDescriptor_Voting_CreateForm);
};


module.exports = proto;

