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
import { ModifyVpnConnectionOptionsRequest, ModifyVpnConnectionOptionsResult } from "../models/models_6";
import {
  deserializeAws_ec2ModifyVpnConnectionOptionsCommand,
  serializeAws_ec2ModifyVpnConnectionOptionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ModifyVpnConnectionOptionsCommand}.
 */
export interface ModifyVpnConnectionOptionsCommandInput extends ModifyVpnConnectionOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpnConnectionOptionsCommand}.
 */
export interface ModifyVpnConnectionOptionsCommandOutput extends ModifyVpnConnectionOptionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the connection options for your Site-to-Site VPN connection.</p>
 *          <p>When you modify the VPN connection options, the VPN endpoint IP addresses on the
 *                 Amazon Web Services side do not change, and the tunnel options do not change. Your
 *             VPN connection will be temporarily unavailable for a brief period while the VPN
 *             connection is updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnConnectionOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnConnectionOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpnConnectionOptionsRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   LocalIpv4NetworkCidr: "STRING_VALUE",
 *   RemoteIpv4NetworkCidr: "STRING_VALUE",
 *   LocalIpv6NetworkCidr: "STRING_VALUE",
 *   RemoteIpv6NetworkCidr: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ModifyVpnConnectionOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyVpnConnectionOptionsCommandInput - {@link ModifyVpnConnectionOptionsCommandInput}
 * @returns {@link ModifyVpnConnectionOptionsCommandOutput}
 * @see {@link ModifyVpnConnectionOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnConnectionOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class ModifyVpnConnectionOptionsCommand extends $Command<
  ModifyVpnConnectionOptionsCommandInput,
  ModifyVpnConnectionOptionsCommandOutput,
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
  constructor(readonly input: ModifyVpnConnectionOptionsCommandInput) {
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
  ): Handler<ModifyVpnConnectionOptionsCommandInput, ModifyVpnConnectionOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpnConnectionOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpnConnectionOptionsCommand";
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
  private serialize(input: ModifyVpnConnectionOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpnConnectionOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpnConnectionOptionsCommandOutput> {
    return deserializeAws_ec2ModifyVpnConnectionOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
