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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { BatchGetAssetPropertyValueRequest, BatchGetAssetPropertyValueResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetAssetPropertyValueCommand,
  serializeAws_restJson1BatchGetAssetPropertyValueCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link BatchGetAssetPropertyValueCommand}.
 */
export interface BatchGetAssetPropertyValueCommandInput extends BatchGetAssetPropertyValueRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetAssetPropertyValueCommand}.
 */
export interface BatchGetAssetPropertyValueCommandOutput extends BatchGetAssetPropertyValueResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying
 *         current values</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchGetAssetPropertyValueCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchGetAssetPropertyValueCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // BatchGetAssetPropertyValueRequest
 *   entries: [ // BatchGetAssetPropertyValueEntries // required
 *     { // BatchGetAssetPropertyValueEntry
 *       entryId: "STRING_VALUE", // required
 *       assetId: "STRING_VALUE",
 *       propertyId: "STRING_VALUE",
 *       propertyAlias: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new BatchGetAssetPropertyValueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchGetAssetPropertyValueCommandInput - {@link BatchGetAssetPropertyValueCommandInput}
 * @returns {@link BatchGetAssetPropertyValueCommandOutput}
 * @see {@link BatchGetAssetPropertyValueCommandInput} for command's `input` shape.
 * @see {@link BatchGetAssetPropertyValueCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The requested service is unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 *
 */
export class BatchGetAssetPropertyValueCommand extends $Command<
  BatchGetAssetPropertyValueCommandInput,
  BatchGetAssetPropertyValueCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: BatchGetAssetPropertyValueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetAssetPropertyValueCommandInput, BatchGetAssetPropertyValueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetAssetPropertyValueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "BatchGetAssetPropertyValueCommand";
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
  private serialize(input: BatchGetAssetPropertyValueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetAssetPropertyValueCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetAssetPropertyValueCommandOutput> {
    return deserializeAws_restJson1BatchGetAssetPropertyValueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
