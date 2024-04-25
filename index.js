import { version, sum, typedSum } from './modules/common/index';
import { fromModule } from './modules/common/module';

export const result = typedSum(1, 2);

export const version = '0.0.4';

export { fromModule } from './modules/common/module';
export { typedSum } from './modules/common';
