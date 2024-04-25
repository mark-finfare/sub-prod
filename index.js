import { version as verCommon, sum, typedSum } from './modules/common/index.js';
import { fromModule } from './modules/common/module.js';

export const result = typedSum(1, 2);

export const version = '0.0.4';

export { fromModule, typedSum };
