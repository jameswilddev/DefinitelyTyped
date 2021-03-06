import { Plugin } from "@ckeditor/ckeditor5-core";

export default class SpecialCharactersText extends Plugin {
    static readonly pluginName: "SpecialCharactersText";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersText: SpecialCharactersText;
    }
}
