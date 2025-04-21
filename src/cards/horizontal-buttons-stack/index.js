import { changeConfig, changeEditor, changeLight, changeStatus, changeStyle, placeButtons, sortButtons } from './changes.js';
import { createStructure } from './create.js';
import { configChanged } from "../../tools/utils.js";
import { changeIcon } from '../../components/base-card/changes.js';

export function handleHorizontalButtonsStack(context) {
    if (context.cardType !== "horizontal-buttons-stack") {
        createStructure(context);
    }

    changeIcon(context);
    changeStyle(context);
    sortButtons(context);
    changeConfig(context);
    changeEditor(context);
    placeButtons(context);
    changeLight(context);
    changeStatus(context);
}