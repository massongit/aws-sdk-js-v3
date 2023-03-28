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
import {
  DisassociateTransitGatewayMulticastDomainRequest,
  DisassociateTransitGatewayMulticastDomainResult,
} from "../models/models_5";
import {
  deserializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand,
  serializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DisassociateTransitGatewayMulticastDomainCommand}.
 */
export interface DisassociateTransitGatewayMulticastDomainCommandInput
  extends DisassociateTransitGatewayMulticastDomainRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTransitGatewayMulticastDomainCommand}.
 */
export interface DisassociateTransitGatewayMulticastDomainCommandOutput
  extends DisassociateTransitGatewayMulticastDomainResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates the specified subnets from the transit gateway multicast domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateTransitGatewayMulticastDomainRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   SubnetIds: [ // TransitGatewaySubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DisassociateTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisassociateTransitGatewayMulticastDomainCommandInput - {@link DisassociateTransitGatewayMulticastDomainCommandInput}
 * @returns {@link DisassociateTransitGatewayMulticastDomainCommandOutput}
 * @see {@link DisassociateTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DisassociateTransitGatewayMulticastDomainCommand extends $Command<
  DisassociateTransitGatewayMulticastDomainCommandInput,
  DisassociateTransitGatewayMulticastDomainCommandOutput,
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
  constructor(readonly input: DisassociateTransitGatewayMulticastDomainCommandInput) {
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
  ): Handler<
    DisassociateTransitGatewayMulticastDomainCommandInput,
    DisassociateTransitGatewayMulticastDomainCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateTransitGatewayMulticastDomainCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateTransitGatewayMulticastDomainCommand";
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
    input: DisassociateTransitGatewayMulticastDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTransitGatewayMulticastDomainCommandOutput> {
    return deserializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
