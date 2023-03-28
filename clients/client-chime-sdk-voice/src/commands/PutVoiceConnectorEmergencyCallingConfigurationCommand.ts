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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  PutVoiceConnectorEmergencyCallingConfigurationRequest,
  PutVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog,
  PutVoiceConnectorEmergencyCallingConfigurationResponse,
  PutVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand,
  serializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationCommandInput
  extends PutVoiceConnectorEmergencyCallingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationCommandOutput
  extends PutVoiceConnectorEmergencyCallingConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates a Voice Connector's emergency calling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorEmergencyCallingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorEmergencyCallingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorEmergencyCallingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   EmergencyCallingConfiguration: { // EmergencyCallingConfiguration
 *     DNIS: [ // DNISEmergencyCallingConfigurationList
 *       { // DNISEmergencyCallingConfiguration
 *         EmergencyPhoneNumber: "STRING_VALUE", // required
 *         TestPhoneNumber: "STRING_VALUE",
 *         CallingCountry: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new PutVoiceConnectorEmergencyCallingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutVoiceConnectorEmergencyCallingConfigurationCommandInput - {@link PutVoiceConnectorEmergencyCallingConfigurationCommandInput}
 * @returns {@link PutVoiceConnectorEmergencyCallingConfigurationCommandOutput}
 * @see {@link PutVoiceConnectorEmergencyCallingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorEmergencyCallingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 *
 */
export class PutVoiceConnectorEmergencyCallingConfigurationCommand extends $Command<
  PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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
  constructor(readonly input: PutVoiceConnectorEmergencyCallingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    PutVoiceConnectorEmergencyCallingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        PutVoiceConnectorEmergencyCallingConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "PutVoiceConnectorEmergencyCallingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog,
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
    input: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput> {
    return deserializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
