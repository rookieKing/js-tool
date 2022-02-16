
import './src/rookie.tool';
import { globalScope } from './src/globalScope';
import Promise from './src/promise';

globalScope.Promise__ = Promise;
if (!globalScope.Promise) globalScope.Promise = Promise;
