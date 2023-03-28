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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateBucketRequest, UpdateBucketResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateBucketCommand,
  serializeAws_json1_1UpdateBucketCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateBucketCommand}.
 */
export interface UpdateBucketCommandInput extends UpdateBucketRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBucketCommand}.
 */
export interface UpdateBucketCommandOutput extends UpdateBucketResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing Amazon Lightsail bucket.</p>
 *          <p>Use this action to update the configuration of an existing bucket, such as versioning,
 *       public accessibility, and the Amazon Web Services accounts that can access the bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateBucketCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateBucketCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // UpdateBucketRequest
 *   bucketName: "STRING_VALUE", // required
 *   accessRules: { // AccessRules
 *     getObject: "public" || "private",
 *     allowPublicOverrides: true || false,
 *   },
 *   versioning: "STRING_VALUE",
 *   readonlyAccessAccounts: [ // PartnerIdList
 *     "STRING_VALUE",
 *   ],
 *   accessLogConfig: { // BucketAccessLogConfig
 *     enabled: true || false, // required
 *     destination: "STRING_VALUE",
 *     prefix: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateBucketCommandInput - {@link UpdateBucketCommandInput}
 * @returns {@link UpdateBucketCommandOutput}
 * @see {@link UpdateBucketCommandInput} for command's `input` shape.
 * @see {@link UpdateBucketCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 *
 */
export class UpdateBucketCommand extends $Command<
  UpdateBucketCommandInput,
  UpdateBucketCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: UpdateBucketCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBucketCommandInput, UpdateBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateBucketCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateBucketCommand";
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
  private serialize(input: UpdateBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateBucketCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBucketCommandOutput> {
    return deserializeAws_json1_1UpdateBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
