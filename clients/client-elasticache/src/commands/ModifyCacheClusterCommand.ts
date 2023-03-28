// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyCacheClusterMessage, ModifyCacheClusterResult } from "../models/models_0";
import {
  deserializeAws_queryModifyCacheClusterCommand,
  serializeAws_queryModifyCacheClusterCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link ModifyCacheClusterCommand}.
 */
export interface ModifyCacheClusterCommandInput extends ModifyCacheClusterMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCacheClusterCommand}.
 */
export interface ModifyCacheClusterCommandOutput extends ModifyCacheClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the settings for a cluster. You
 *             can use this operation to change one or more cluster configuration parameters by
 *             specifying the parameters and the new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyCacheClusterMessage
 *   CacheClusterId: "STRING_VALUE", // required
 *   NumCacheNodes: Number("int"),
 *   CacheNodeIdsToRemove: [ // CacheNodeIdsList
 *     "STRING_VALUE",
 *   ],
 *   AZMode: "single-az" || "cross-az",
 *   NewAvailabilityZones: [ // PreferredAvailabilityZoneList
 *     "STRING_VALUE",
 *   ],
 *   CacheSecurityGroupNames: [ // CacheSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   NotificationTopicArn: "STRING_VALUE",
 *   CacheParameterGroupName: "STRING_VALUE",
 *   NotificationTopicStatus: "STRING_VALUE",
 *   ApplyImmediately: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   SnapshotRetentionLimit: Number("int"),
 *   SnapshotWindow: "STRING_VALUE",
 *   CacheNodeType: "STRING_VALUE",
 *   AuthToken: "STRING_VALUE",
 *   AuthTokenUpdateStrategy: "SET" || "ROTATE" || "DELETE",
 *   LogDeliveryConfigurations: [ // LogDeliveryConfigurationRequestList
 *     { // LogDeliveryConfigurationRequest
 *       LogType: "slow-log" || "engine-log",
 *       DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 *       DestinationDetails: { // DestinationDetails
 *         CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 *           LogGroup: "STRING_VALUE",
 *         },
 *         KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 *           DeliveryStream: "STRING_VALUE",
 *         },
 *       },
 *       LogFormat: "text" || "json",
 *       Enabled: true || false,
 *     },
 *   ],
 *   IpDiscovery: "ipv4" || "ipv6",
 * };
 * const command = new ModifyCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyCacheClusterCommandInput - {@link ModifyCacheClusterCommandInput}
 * @returns {@link ModifyCacheClusterCommandOutput}
 * @see {@link ModifyCacheClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security group.</p>
 *
 * @throws {@link InsufficientCacheClusterCapacityFault} (client fault)
 *  <p>The requested cache node type is not available in the specified Availability Zone.
 *             For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidCacheSecurityGroupStateFault} (client fault)
 *  <p>The current state of the cache security group does not allow deletion.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The VPC network is in an invalid state.</p>
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.</p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
 *
 *
 * @example ModifyCacheCluster
 * ```javascript
 * // Copies a snapshot to a specified name.
 * const input = {
 *   "ApplyImmediately": true,
 *   "CacheClusterId": "redis-cluster",
 *   "SnapshotRetentionLimit": 14
 * };
 * const command = new ModifyCacheClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheCluster": {
 *     "AutoMinorVersionUpgrade": true,
 *     "CacheClusterCreateTime": "2016-12-22T16:27:56.078Z",
 *     "CacheClusterId": "redis-cluster",
 *     "CacheClusterStatus": "available",
 *     "CacheNodeType": "cache.r3.large",
 *     "CacheParameterGroup": {
 *       "CacheNodeIdsToReboot": [],
 *       "CacheParameterGroupName": "default.redis3.2",
 *       "ParameterApplyStatus": "in-sync"
 *     },
 *     "CacheSecurityGroups": [],
 *     "CacheSubnetGroupName": "default",
 *     "ClientDownloadLandingPage": "https://console.aws.amazon.com/elasticache/home#client-download:",
 *     "Engine": "redis",
 *     "EngineVersion": "3.2.4",
 *     "NumCacheNodes": 1,
 *     "PendingModifiedValues": {},
 *     "PreferredAvailabilityZone": "us-east-1e",
 *     "PreferredMaintenanceWindow": "fri:09:00-fri:10:00",
 *     "SnapshotRetentionLimit": 14,
 *     "SnapshotWindow": "07:00-08:00"
 *   }
 * }
 * *\/
 * // example id: modifycachecluster-1482962725919
 * ```
 *
 */
export class ModifyCacheClusterCommand extends $Command<
  ModifyCacheClusterCommandInput,
  ModifyCacheClusterCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ModifyCacheClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyCacheClusterCommandInput, ModifyCacheClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyCacheClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyCacheClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ModifyCacheClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyCacheClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyCacheClusterCommandOutput> {
    return deserializeAws_queryModifyCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
