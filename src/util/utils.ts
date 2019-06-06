import uuid from "uuid-random";

/**
 * Utils class for custom method.
 * Only static methods accessible from everywhere.
 */
export class Utils {
  /**
   * Cleans the undefined fields of the object by returning a new object containing only defined fields (can be null)
   *
   * Does NOT change the original object
   * @param obj
   * @return a new cleaned object
   */
  static clean<T>(obj: T): T {
    let o = Object.assign({}, obj);
    Object.keys(o).forEach(key => o[key] === undefined && delete o[key]);
    return o;
  }

  /**
   * @name pad2
   * @desc Return formatted string number OO.
   * @param {number} number: the number to pad.
   * @returns {string}
   * @memberOf Utils
   * @param {number} number
   */
  static pad2(number: number): string {
    return (number < 10 ? '0' : '') + number;
  }

  /**
   * @name capitalizeFirstLetter
   * @desc Return a new string with first letter capitalized and a point at the end.
   * @param {string} string: the string to modify;
   * @returns {string} the final string.
   */
  static capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1) + (string.charAt(string.length - 1) === '.' ? "" : ".");
  }

  /**
   * @name audioPath
   * @desc Create a new path for audio file.
   * @returns {string}: the audio path.
   * @memberOf Utils
   */
  static audioPath(idProject: string): string {
    return `audio/${idProject}/${uuid()}.wav`;
  }

  /**
   * @name imagePath
   * @desc Create a new path for img file.
   * @param {string} idProject
   * @param {string} idParticipant
   * @returns {string}
   */
  static imagePath(idProject: string, idParticipant: string) {
    return `image/${idProject}/avatar/${idParticipant}`;
  }

  /**
   * @name error
   * @desc Log a custom error.
   * @param message
   */
  static error(message: string): void {
    console.log(message);
  }

  /**
   * @name b64toBlob
   * @desc Convert string to blob.
   * @ref https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
   * @param {string} b64Data: the string to convert.
   * @param {string} contentType: type of content.
   * @param {number} sliceSize: buffer size.
   * @returns {Blob}
   * @memberOf Utils
   */
  static b64toBlob(b64Data: string, contentType: string, sliceSize: number): Blob {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);

      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      let byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: contentType});
  }

  /**
   * @name float32ArraySpliceToArray
   * @desc Convert Float32Array to Array<Float32Array>.
   * @param {Float32Array} float32array
   * @param {number} tabSize
   * @returns {Array<Float32Array>}
   * @memberOf Utils
   */
  static float32ArraySpliceToArray(float32array: Float32Array, tabSize: number): Array<Float32Array> {
    const resultArray = new Array<Float32Array>();
    let i = 0;
    let j = -1;

    float32array.forEach((val) => {
      if(i % tabSize === 0) {
        resultArray.push(new Float32Array(tabSize));
        j++;
      }

      resultArray[j][i % tabSize] = val;
      i++;
    });

    return resultArray;
  }

  /**
   * @name dataViewToArray
   * @desc Convert DataView into Array<Float32Array>.
   * @param {DataView} dataView
   * @returns {Array<Float32Array>}
   * @memberOf Utils
   */
  static dataViewToArray(dataView: DataView): Array<Float32Array> {
    let index = 44;
    let result = new Float32Array(dataView.byteLength / 2);

    // - 32 because of Int16 size * index
    for (let i = 0; i < (dataView.byteLength / 2) - 32; i++) {
      result[i] = (dataView.getInt16(index, true) / 0x7FFF);
      index += 2;
    }

    return Utils.float32ArraySpliceToArray(result, 2048);
  }

  /**
   * @name tagSelectedText
   * @desc Add a new span tag inside selection in native javascript to keep best performance
   * @param {} tag
   */
  static tagSelectedText(tag: any) {
    let selection = window.getSelection().getRangeAt(0);
    let selectedText = selection.extractContents();
    let span = document.createElement("span");

    // Adding nbsp before and after for better editing
    selectedText.textContent = `\u00A0${selectedText.textContent}\u00A0`;

    span.style.backgroundColor = tag.color;
    span.setAttribute( 'data-tag-type', tag.type);
    span.appendChild(selectedText);
    selection.insertNode(span);
  }

  /**
   * @name getHTMLOfSelection
   * @desc Get the complete html of selected text.
   * @returns {string} the html of selection.
   */
  static getHTMLOfSelection() {
    let range;

    if (document.getSelection() && document.getSelection()['createRange']) {
      range = document.getSelection()['createRange']();
      return range.htmlText;
    }

    else if (window.getSelection) {
      let selection = window.getSelection();

      if (selection.rangeCount > 0) {
        range = selection.getRangeAt(0);

        let clonedSelection = range.cloneContents();
        let div = document.createElement('div');

        div.appendChild(clonedSelection);

        return div.innerHTML;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
}
