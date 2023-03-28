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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { CancelLegalHoldInput, CancelLegalHoldOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CancelLegalHoldCommand,
  serializeAws_restJson1CancelLegalHoldCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CancelLegalHoldCommand}.
 */
export interface CancelLegalHoldCommandInput extends CancelLegalHoldInput {}
/**
 * @public
 *
 * The output of {@link CancelLegalHoldCommand}.
 */
export interface CancelLegalHoldCommandOutput extends CancelLegalHoldOutput, __MetadataBearer {}

/**
 * @public
 * <p>This action removes the specified legal hold on a recovery point.
 *          This action can only be performed by a user with sufficient permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CancelLegalHoldCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CancelLegalHoldCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // CancelLegalHoldInput
 *   LegalHoldId: "STRING_VALUE", // required
 *   CancelDescription: "STRING_VALUE", // required
 *   RetainRecordInDays: Number("long"),
 * };
 * const command = new CancelLegalHoldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CancelLegalHoldCommandInput - {@link CancelLegalHoldCommandInput}
 * @returns {@link CancelLegalHoldCommandOutput}
 * @see {@link CancelLegalHoldCommandInput} for command's `input` shape.
 * @see {@link CancelLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>Backup is already performing an action on this recovery point. It can't
 *          perform the action you requested until the first action finishes. Try again later.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 *
 */
export class CancelLegalHoldCommand extends $Command<
  CancelLegalHoldCommandInput,
  CancelLegalHoldCommandOutput,
  BackupClientResolvedConfig
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
  constructor(readonly input: CancelLegalHoldCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelLegalHoldCommandInput, CancelLegalHoldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelLegalHoldCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CancelLegalHoldCommand";
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
  private serialize(input: CancelLegalHoldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelLegalHoldCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelLegalHoldCommandOutput> {
    return deserializeAws_restJson1CancelLegalHoldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
