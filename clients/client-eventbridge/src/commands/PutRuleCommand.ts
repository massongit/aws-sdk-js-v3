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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutRuleRequest, PutRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1PutRuleCommand, serializeAws_json1_1PutRuleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link PutRuleCommand}.
 */
export interface PutRuleCommandInput extends PutRuleRequest {}
/**
 * @public
 *
 * The output of {@link PutRuleCommand}.
 */
export interface PutRuleCommandOutput extends PutRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates the specified rule. Rules are enabled by default, or based on value of
 *       the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p>
 *          <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services
 *       go to your account's default event bus. Events generated by SaaS partner services or
 *       applications go to the matching partner event bus. If you have custom applications or
 *       services, you can specify whether their events go to your default event bus or a custom event
 *       bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
 *          <p>If you are updating an existing rule, the rule is replaced with what you specify in this
 *         <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values
 *       for those arguments are not kept. Instead, they are replaced with null values.</p>
 *          <p>When you create or update a rule, incoming events might not immediately start matching to
 *       new or updated rules. Allow a short period of time for changes to take effect.</p>
 *          <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with
 *       EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions
 *       self-trigger based on the given schedule. A rule can have both an EventPattern and a
 *       ScheduleExpression, in which case the rule triggers on matching events as well as on a
 *       schedule.</p>
 *          <p>When you initially create a rule, you can optionally assign one or more tags to the rule.
 *       Tags can help you organize and categorize your resources. You can also use them to scope user
 *       permissions, by granting a user permission to access or change only rules with certain tag
 *       values. To use the <code>PutRule</code> operation and assign tags, you must have both the
 *         <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p>
 *          <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code>
 *       operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
 *          <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs).
 *       However, EventBridge uses an exact match in event patterns and rules. Be sure to use the
 *       correct ARN characters when creating event patterns so that they match the ARN syntax in the
 *       event you want to match.</p>
 *          <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule
 *       is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket,
 *       and trigger software to change them to the desired state. If the rule is not written
 *       carefully, the subsequent change to the ACLs fires the rule again, creating an infinite
 *       loop.</p>
 *          <p>To prevent this, write the rules so that the triggered actions do not re-fire the same
 *       rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead
 *       of after any change. </p>
 *          <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use
 *       budgeting, which alerts you when charges exceed your specified limit. For more information,
 *       see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with
 *         Budgets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutRuleCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutRuleCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // PutRuleRequest
 *   Name: "STRING_VALUE", // required
 *   ScheduleExpression: "STRING_VALUE",
 *   EventPattern: "STRING_VALUE",
 *   State: "ENABLED" || "DISABLED",
 *   Description: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   EventBusName: "STRING_VALUE",
 * };
 * const command = new PutRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutRuleCommandInput - {@link PutRuleCommandInput}
 * @returns {@link PutRuleCommandOutput}
 * @see {@link PutRuleCommandInput} for command's `input` shape.
 * @see {@link PutRuleCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *  <p>The event pattern is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ManagedRuleException} (client fault)
 *  <p>This rule was created by an Amazon Web Services service on behalf of your account. It is managed by that
 *       service. If you see this error in response to <code>DeleteRule</code> or
 *         <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to
 *       delete the rule or remove targets from the rule. You cannot modify these managed rules by
 *       using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>,
 *         <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 *
 */
export class PutRuleCommand extends $Command<
  PutRuleCommandInput,
  PutRuleCommandOutput,
  EventBridgeClientResolvedConfig
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
  constructor(readonly input: PutRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRuleCommandInput, PutRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "PutRuleCommand";
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
  private serialize(input: PutRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRuleCommandOutput> {
    return deserializeAws_json1_1PutRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
