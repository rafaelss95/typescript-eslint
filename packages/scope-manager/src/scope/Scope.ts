import { BlockScope } from './BlockScope';
import { CatchScope } from './CatchScope';
import { ClassFieldInitializerScope } from './ClassFieldInitializerScope';
import { ClassScope } from './ClassScope';
import { ConditionalTypeScope } from './ConditionalTypeScope';
import { ForScope } from './ForScope';
import { FunctionExpressionNameScope } from './FunctionExpressionNameScope';
import { FunctionScope } from './FunctionScope';
import { FunctionTypeScope } from './FunctionTypeScope';
import { GlobalScope } from './GlobalScope';
import { MappedTypeScope } from './MappedTypeScope';
import { ModuleScope } from './ModuleScope';
import { SwitchScope } from './SwitchScope';
import { TSEnumScope } from './TSEnumScope';
import { TSModuleScope } from './TSModuleScope';
import { TypeScope } from './TypeScope';
import { WithScope } from './WithScope';

type Scope =
  | BlockScope
  | CatchScope
  | ClassScope
  | ClassFieldInitializerScope
  | ConditionalTypeScope
  | ForScope
  | FunctionExpressionNameScope
  | FunctionScope
  | FunctionTypeScope
  | GlobalScope
  | MappedTypeScope
  | ModuleScope
  | SwitchScope
  | TSEnumScope
  | TSModuleScope
  | TypeScope
  | WithScope;

export { Scope };
