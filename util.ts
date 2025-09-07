import _ from "lodash";
import pc from "picocolors";
import 'some-unresolved-package';

export const used = () => pc.blue("Hello");

export const unusedFunction = () => _.random();
