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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSpotDatafeedSubscriptionRequest } from "../models/models_2";
import {
  deserializeAws_ec2DeleteSpotDatafeedSubscriptionCommand,
  serializeAws_ec2DeleteSpotDatafeedSubscriptionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteSpotDatafeedSubscriptionCommand}.
 */
export interface DeleteSpotDatafeedSubscriptionCommandInput extends DeleteSpotDatafeedSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSpotDatafeedSubscriptionCommand}.
 */
export interface DeleteSpotDatafeedSubscriptionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the data feed for Spot Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSpotDatafeedSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSpotDatafeedSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteSpotDatafeedSubscriptionRequest
 *   DryRun: true || false,
 * };
 * const command = new DeleteSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteSpotDatafeedSubscriptionCommandInput - {@link DeleteSpotDatafeedSubscriptionCommandInput}
 * @returns {@link DeleteSpotDatafeedSubscriptionCommandOutput}
 * @see {@link DeleteSpotDatafeedSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteSpotDatafeedSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To cancel a Spot Instance data feed subscription
 * ```javascript
 * // This example deletes a Spot data feed subscription for the account.
 * const input = undefined;
 * const command = new DeleteSpotDatafeedSubscriptionCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-spot-datafeed-subscription-1
 * ```
 *
 */
export class DeleteSpotDatafeedSubscriptionCommand extends $Command<
  DeleteSpotDatafeedSubscriptionCommandInput,
  DeleteSpotDatafeedSubscriptionCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DeleteSpotDatafeedSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSpotDatafeedSubscriptionCommandInput, DeleteSpotDatafeedSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSpotDatafeedSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteSpotDatafeedSubscriptionCommand";
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
  private serialize(
    input: DeleteSpotDatafeedSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteSpotDatafeedSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSpotDatafeedSubscriptionCommandOutput> {
    return deserializeAws_ec2DeleteSpotDatafeedSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
