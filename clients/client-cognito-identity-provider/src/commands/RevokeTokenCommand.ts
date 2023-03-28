// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { RevokeTokenRequest, RevokeTokenRequestFilterSensitiveLog, RevokeTokenResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RevokeTokenCommand,
  serializeAws_json1_1RevokeTokenCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link RevokeTokenCommand}.
 */
export interface RevokeTokenCommandInput extends RevokeTokenRequest {}
/**
 * @public
 *
 * The output of {@link RevokeTokenCommand}.
 */
export interface RevokeTokenCommandOutput extends RevokeTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Revokes all of the access tokens generated by, and at the same time as, the specified
 *             refresh token. After a token is revoked, you can't use the revoked token to access
 *             Amazon Cognito user APIs, or to authorize access to your resource server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, RevokeTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, RevokeTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // RevokeTokenRequest
 *   Token: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   ClientSecret: "STRING_VALUE",
 * };
 * const command = new RevokeTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RevokeTokenCommandInput - {@link RevokeTokenCommandInput}
 * @returns {@link RevokeTokenCommandOutput}
 * @see {@link RevokeTokenCommandInput} for command's `input` shape.
 * @see {@link RevokeTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web ACL that's associated with your user pool.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Exception that is thrown when the request isn't authorized. This can happen due to an
 *             invalid access token in the request.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Exception that is thrown when you attempt to perform an operation that isn't enabled
 *             for the user pool client.</p>
 *
 * @throws {@link UnsupportedTokenTypeException} (client fault)
 *  <p>Exception that is thrown when an unsupported token is passed to an operation.</p>
 *
 *
 */
export class RevokeTokenCommand extends $Command<
  RevokeTokenCommandInput,
  RevokeTokenCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
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
  constructor(readonly input: RevokeTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeTokenCommandInput, RevokeTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RevokeTokenCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "RevokeTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeTokenRequestFilterSensitiveLog,
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
  private serialize(input: RevokeTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RevokeTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeTokenCommandOutput> {
    return deserializeAws_json1_1RevokeTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
