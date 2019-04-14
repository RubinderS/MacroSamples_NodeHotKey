import { ToolsType } from 'nodehotkey';

export function typeCurrentDate(tools: ToolsType) {
    let date = new Date();
    tools.type(date.toLocaleDateString('en-GB'));
}