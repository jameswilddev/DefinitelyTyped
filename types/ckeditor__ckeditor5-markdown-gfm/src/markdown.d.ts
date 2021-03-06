import { Plugin } from '@ckeditor/ckeditor5-core';

export default class Markdown extends Plugin {
    static readonly pluginName: 'Markdown';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Markdown: Markdown;
    }
}
