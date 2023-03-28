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
import { DeleteNetworkInsightsAccessScopeRequest, DeleteNetworkInsightsAccessScopeResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteNetworkInsightsAccessScopeCommand,
  serializeAws_ec2DeleteNetworkInsightsAccessScopeCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteNetworkInsightsAccessScopeCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeCommandInput extends DeleteNetworkInsightsAccessScopeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInsightsAccessScopeCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeCommandOutput
  extends DeleteNetworkInsightsAccessScopeResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Network Access Scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAccessScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAccessScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInsightsAccessScopeRequest
 *   DryRun: true || false,
 *   NetworkInsightsAccessScopeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkInsightsAccessScopeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteNetworkInsightsAccessScopeCommandInput - {@link DeleteNetworkInsightsAccessScopeCommandInput}
 * @returns {@link DeleteNetworkInsightsAccessScopeCommandOutput}
 * @see {@link DeleteNetworkInsightsAccessScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAccessScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DeleteNetworkInsightsAccessScopeCommand extends $Command<
  DeleteNetworkInsightsAccessScopeCommandInput,
  DeleteNetworkInsightsAccessScopeCommandOutput,
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
  constructor(readonly input: DeleteNetworkInsightsAccessScopeCommandInput) {
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
  ): Handler<DeleteNetworkInsightsAccessScopeCommandInput, DeleteNetworkInsightsAccessScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNetworkInsightsAccessScopeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNetworkInsightsAccessScopeCommand";
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
    input: DeleteNetworkInsightsAccessScopeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteNetworkInsightsAccessScopeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNetworkInsightsAccessScopeCommandOutput> {
    return deserializeAws_ec2DeleteNetworkInsightsAccessScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
