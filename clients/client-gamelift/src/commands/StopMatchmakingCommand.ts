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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StopMatchmakingInput, StopMatchmakingOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StopMatchmakingCommand,
  serializeAws_json1_1StopMatchmakingCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StopMatchmakingCommand}.
 */
export interface StopMatchmakingCommandInput extends StopMatchmakingInput {}
/**
 * @public
 *
 * The output of {@link StopMatchmakingCommand}.
 */
export interface StopMatchmakingCommandOutput extends StopMatchmakingOutput, __MetadataBearer {}

/**
 * @public
 * <p>Cancels a matchmaking ticket or match backfill ticket that is currently being
 *             processed. To stop the matchmaking operation, specify the ticket ID. If successful, work
 *             on the ticket is stopped, and the ticket status is changed to
 *             <code>CANCELLED</code>.</p>
 *         <p>This call is also used to turn off automatic backfill for an individual game session.
 *             This is for game sessions that are created with a matchmaking configuration that has
 *             automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code>
 *             of an updated game session object, which is provided to the game server.</p>
 *         <note>
 *             <p>If the operation is successful, the service sends back an empty JSON struct with
 *                 the HTTP 200 response (not an empty HTTP body).</p>
 *         </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *                 Add FlexMatch to a game client</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StopMatchmakingCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // StopMatchmakingInput
 *   TicketId: "STRING_VALUE", // required
 * };
 * const command = new StopMatchmakingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StopMatchmakingCommandInput - {@link StopMatchmakingCommandInput}
 * @returns {@link StopMatchmakingCommandOutput}
 * @see {@link StopMatchmakingCommandInput} for command's `input` shape.
 * @see {@link StopMatchmakingCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 *
 */
export class StopMatchmakingCommand extends $Command<
  StopMatchmakingCommandInput,
  StopMatchmakingCommandOutput,
  GameLiftClientResolvedConfig
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
  constructor(readonly input: StopMatchmakingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopMatchmakingCommandInput, StopMatchmakingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopMatchmakingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "StopMatchmakingCommand";
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
  private serialize(input: StopMatchmakingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopMatchmakingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopMatchmakingCommandOutput> {
    return deserializeAws_json1_1StopMatchmakingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
