import { wasm_bindgen_initialize } from './snippets/stdweb-bb142200b065bd55/inline253.js';
import { __cargo_web_snippet_8c32019649bb581b1b742eeedfc410e2bedd56a6 } from './snippets/stdweb-bb142200b065bd55/inline409.js';
import { __cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0 } from './snippets/stdweb-bb142200b065bd55/inline633.js';
import { __cargo_web_snippet_5c3091ae7fa9c42123eec37f64de99a5808e7ef2 } from './snippets/stdweb-bb142200b065bd55/inline695.js';
import { __cargo_web_snippet_5c57e16ebd22655f976d87fae8039e282d7bab59 } from './snippets/stdweb-bb142200b065bd55/inline700.js';
import { __cargo_web_snippet_ecd8f83530fd9b57edbdc4822b4ea5b373e3a927 } from './snippets/stdweb-bb142200b065bd55/inline708.js';
import { __cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723 } from './snippets/stdweb-bb142200b065bd55/inline749.js';
import { __cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6 } from './snippets/stdweb-bb142200b065bd55/inline750.js';
import { __cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf } from './snippets/stdweb-bb142200b065bd55/inline751.js';
import { __cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63 } from './snippets/stdweb-bb142200b065bd55/inline752.js';
import { __cargo_web_snippet_9a7eca60ef721cc6257c116658f2fcdd49070cd1 } from './snippets/stdweb-bb142200b065bd55/inline825.js';
import { __cargo_web_snippet_7da4da5c1d6778b3677e0a3133c1c2613594e3f4 } from './snippets/stdweb-bb142200b065bd55/inline826.js';
import * as wasm from './wasm_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachegetFloat64Memory0;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_0.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_24(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc7ad94c66343ac4a(arg0, arg1);
}

function __wbg_adapter_27(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4adc68ff16d39926(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_30(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1fa619a87e7cde70(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_33(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3befa7c965223f1b(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_36(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7ddcae3a591615d5(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_39(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h67fad3802870c570(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_42(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h44c8023343226119(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_45(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h173ce9b035829c93(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_48(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd8cf5c51d3f7fea5(arg0, arg1, addHeapObject(arg2));
}

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_0.get(state.dtor)(state.a, state.b);
                state.a = 0;

            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_51(arg0, arg1, arg2) {
    var ret = wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd2ab8374e60f8e68(arg0, arg1, arg2);
    return ret;
}

function __wbg_adapter_54(arg0, arg1, arg2, arg3) {
    wasm._dyn_core__ops__function__Fn__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h36d8d359db62299f(arg0, arg1, arg2, arg3);
}

function __wbg_adapter_57(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h820141750c7f2558(arg0, arg1, addHeapObject(arg2));
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

export const __wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    return ret;
};

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbg_fetch_8fd2e4322bb8dc59 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).fetch(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
};

export const __wbg_instanceof_Response_328c03967a8e8902 = function(arg0) {
    var ret = getObject(arg0) instanceof Response;
    return ret;
};

export const __wbg_arrayBuffer_dc33ab7b8cdf0d63 = handleError(function(arg0) {
    var ret = getObject(arg0).arrayBuffer();
    return addHeapObject(ret);
});

export const __wbg_new_9b295d24cf1d706f = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

export const __wbg_length_2b13641a9d906653 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

export const __wbindgen_memory = function() {
    var ret = wasm.memory;
    return addHeapObject(ret);
};

export const __wbg_buffer_49131c283a06686f = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

export const __wbg_set_3bb960a9975f3cd2 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

export const __wbg_measure_0c2a5c5e55e16643 = function(arg0, arg1, arg2, arg3) {
    performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
};

export const __wbg_mark_e32edf3b52687c6a = function(arg0, arg1) {
    performance.mark(getStringFromWasm0(arg0, arg1));
};

export const __wbg_log_75fc43480a5907a7 = function(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
};

export const __wbg_log_a73f6bdd88fae982 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
};

export const __wbg_createShader_bc89b940e81883dd = function(arg0, arg1) {
    var ret = getObject(arg0).createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_shaderSource_1804c02eec34a9c2 = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
};

export const __wbg_compileShader_18c92b61889a02b6 = function(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
};

export const __wbg_getShaderParameter_f942fc2044b16ba0 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

export const __wbindgen_boolean_get = function(arg0) {
    const v = getObject(arg0);
    var ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    return ret;
};

export const __wbg_getShaderInfoLog_1071a8467544f43b = function(arg0, arg1, arg2) {
    var ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_createProgram_8d6f13ab051f686a = function(arg0) {
    var ret = getObject(arg0).createProgram();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_attachShader_1924aa4a49a31418 = function(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
};

export const __wbg_linkProgram_a5fd2d3a29f244c0 = function(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
};

export const __wbg_getProgramParameter_d2854e9210e85494 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
};

export const __wbg_getProgramInfoLog_221be6701c636176 = function(arg0, arg1, arg2) {
    var ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbindgen_number_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'number' ? obj : undefined;
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

export const __wbg_getActiveAttrib_5d4589560031c141 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getActiveAttrib(getObject(arg1), arg2 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_name_27b4012d3621bcc1 = function(arg0, arg1) {
    var ret = getObject(arg1).name;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_type_43500effee613c7d = function(arg0) {
    var ret = getObject(arg0).type;
    return ret;
};

export const __wbg_getActiveUniformBlockName_9307faa56eb4763e = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg1).getActiveUniformBlockName(getObject(arg2), arg3 >>> 0);
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_getActiveUniform_f736b9cae4dcb0b0 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getActiveUniform(getObject(arg1), arg2 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_viewport_30b14839e31d0b61 = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).viewport(arg1, arg2, arg3, arg4);
};

export const __wbg_createTexture_e172faa9d6a303c1 = function(arg0) {
    var ret = getObject(arg0).createTexture();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_createBuffer_7fadf474857a2122 = function(arg0) {
    var ret = getObject(arg0).createBuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_bindBuffer_6a7df3ea760a2c83 = function(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
};

export const __wbg_bufferData_12efaaa2e1cd74e4 = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
};

export const __wbg_bufferSubData_8f079a5244d6c9d3 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).bufferSubData(arg1 >>> 0, arg2, getArrayU8FromWasm0(arg3, arg4), arg5 >>> 0, arg6 >>> 0);
};

export const __wbg_bufferData_a49730b56e5517bc = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).bufferData(arg1 >>> 0, getArrayU8FromWasm0(arg2, arg3), arg4 >>> 0);
};

export const __wbg_deleteBuffer_e06fcb6201291d2e = function(arg0, arg1) {
    getObject(arg0).deleteBuffer(getObject(arg1));
};

export const __wbg_deleteTexture_71c09d0186504319 = function(arg0, arg1) {
    getObject(arg0).deleteTexture(getObject(arg1));
};

export const __wbg_useProgram_9523fdac78894a60 = function(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
};

export const __wbg_getUniformBlockIndex_ffda6282b14d7087 = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getUniformBlockIndex(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return ret;
};

export const __wbg_uniformBlockBinding_762aa6c06bda445f = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniformBlockBinding(getObject(arg1), arg2 >>> 0, arg3 >>> 0);
};

export const __wbg_getUniformLocation_d6e4f5bee8a84579 = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_uniform1i_a34df477d48c37e2 = function(arg0, arg1, arg2) {
    getObject(arg0).uniform1i(getObject(arg1), arg2);
};

export const __wbg_getAttribLocation_67060fc7496f8cf6 = function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getAttribLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return ret;
};

export const __wbg_createVertexArray_fd08eb7c8f8e86a3 = function(arg0) {
    var ret = getObject(arg0).createVertexArray();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_width_a22f9855caa54b53 = function(arg0) {
    var ret = getObject(arg0).width;
    return ret;
};

export const __wbg_height_9a404a6b3c61c7ef = function(arg0) {
    var ret = getObject(arg0).height;
    return ret;
};

export const __wbg_new_3e06d4f36713e4cb = function() {
    var ret = new Object();
    return addHeapObject(ret);
};

export const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export const __wbg_getContext_e7747f5b022c18e9 = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

export const __wbg_instanceof_WebGl2RenderingContext_836e46859b2055b5 = function(arg0) {
    var ret = getObject(arg0) instanceof WebGL2RenderingContext;
    return ret;
};

export const __wbg_enable_28a715ea384ce803 = function(arg0, arg1) {
    getObject(arg0).enable(arg1 >>> 0);
};

export const __wbg_copyBufferSubData_dffbb05a383b306f = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).copyBufferSubData(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
};

export const __wbg_bindTexture_a03a7320443c8a4d = function(arg0, arg1, arg2) {
    getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
};

export const __wbg_texImage2D_6e9c8af5cdb39ad6 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
});

export const __wbg_generateMipmap_e4fa2d997c6d5f54 = function(arg0, arg1) {
    getObject(arg0).generateMipmap(arg1 >>> 0);
};

export const __wbg_texParameteri_f3be7a9c7fc03dac = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
};

export const __wbg_clearColor_5941bfbf220e0165 = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
};

export const __wbg_clear_256f95c85e2d5b47 = function(arg0, arg1) {
    getObject(arg0).clear(arg1 >>> 0);
};

export const __wbg_bindVertexArray_8bb02f8645a29e05 = function(arg0, arg1) {
    getObject(arg0).bindVertexArray(getObject(arg1));
};

export const __wbg_enableVertexAttribArray_fafa57fbcd454495 = function(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
};

export const __wbg_vertexAttribPointer_88010123ef756633 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
};

export const __wbg_instanceof_Int32Array_9180e5b90ab36f2b = function(arg0) {
    var ret = getObject(arg0) instanceof Int32Array;
    return ret;
};

export const __wbg_getindex_e8f2294046c64658 = function(arg0, arg1) {
    var ret = getObject(arg0)[arg1 >>> 0];
    return ret;
};

export const __wbg_scissor_9d616e9402e84ad4 = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).scissor(arg1, arg2, arg3, arg4);
};

export const __wbg_drawElementsInstanced_8d8af84227d0e1e7 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
};

export const __wbg_drawArrays_3a2dad7dfe033972 = function(arg0, arg1, arg2, arg3) {
    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
};

export const __wbg_bindBufferRange_3dfb690311ada5c0 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).bindBufferRange(arg1 >>> 0, arg2 >>> 0, getObject(arg3), arg4, arg5);
};

export const __wbg_activeTexture_9d96cecdacbe1a7d = function(arg0, arg1) {
    getObject(arg0).activeTexture(arg1 >>> 0);
};

export const __wbg_cullFace_82d5cfe3fcb99968 = function(arg0, arg1) {
    getObject(arg0).cullFace(arg1 >>> 0);
};

export const __wbg_disable_edb7c38f0be19a38 = function(arg0, arg1) {
    getObject(arg0).disable(arg1 >>> 0);
};

export const __wbg_depthFunc_b6ca07790535145e = function(arg0, arg1) {
    getObject(arg0).depthFunc(arg1 >>> 0);
};

export const __wbg_blendFuncSeparate_202782033cc0fb52 = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
};

export const __wbg_blendEquation_b63f57b532a75180 = function(arg0, arg1) {
    getObject(arg0).blendEquation(arg1 >>> 0);
};

export const __wbg_matches_9d45aa12636791b2 = function(arg0) {
    var ret = getObject(arg0).matches;
    return ret;
};

export const __wbg_stopPropagation_a47dd3b6ffe6b400 = function(arg0) {
    getObject(arg0).stopPropagation();
};

export const __wbg_cancelBubble_ba020b9735aa529e = function(arg0) {
    var ret = getObject(arg0).cancelBubble;
    return ret;
};

export const __wbg_preventDefault_93d06688748bfc14 = function(arg0) {
    getObject(arg0).preventDefault();
};

export const __wbg_deltaX_ee242e8414135d41 = function(arg0) {
    var ret = getObject(arg0).deltaX;
    return ret;
};

export const __wbg_deltaY_35bf8632b9f25820 = function(arg0) {
    var ret = getObject(arg0).deltaY;
    return ret;
};

export const __wbg_deltaMode_1fd222964cdbb5af = function(arg0) {
    var ret = getObject(arg0).deltaMode;
    return ret;
};

export const __wbg_key_590d4d2a765d1b58 = function(arg0, arg1) {
    var ret = getObject(arg1).key;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_ctrlKey_f080ec163dcc2703 = function(arg0) {
    var ret = getObject(arg0).ctrlKey;
    return ret;
};

export const __wbg_altKey_1b58e09f218a0f4b = function(arg0) {
    var ret = getObject(arg0).altKey;
    return ret;
};

export const __wbg_getModifierState_b6cb98c792c66e40 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getModifierState(getStringFromWasm0(arg1, arg2));
    return ret;
};

export const __wbg_keyCode_689d196ab65a93d7 = function(arg0) {
    var ret = getObject(arg0).keyCode;
    return ret;
};

export const __wbg_charCode_96fab95517f6f4f4 = function(arg0) {
    var ret = getObject(arg0).charCode;
    return ret;
};

export const __wbg_innerWidth_60241abd729ed26f = handleError(function(arg0) {
    var ret = getObject(arg0).innerWidth;
    return addHeapObject(ret);
});

export const __wbg_innerHeight_2f860a67225f1fbd = handleError(function(arg0) {
    var ret = getObject(arg0).innerHeight;
    return addHeapObject(ret);
});

export const __wbg_pointerId_e7b9f2d5782623b5 = function(arg0) {
    var ret = getObject(arg0).pointerId;
    return ret;
};

export const __wbg_offsetX_204ab4b52fb9d668 = function(arg0) {
    var ret = getObject(arg0).offsetX;
    return ret;
};

export const __wbg_offsetY_3d8860ff1285d58d = function(arg0) {
    var ret = getObject(arg0).offsetY;
    return ret;
};

export const __wbg_setPointerCapture_625b38d5daedd8cc = handleError(function(arg0, arg1) {
    getObject(arg0).setPointerCapture(arg1);
});

export const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

export const __wbg_target_02b2c4e71f788cc6 = function(arg0) {
    var ret = getObject(arg0).target;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_is_333329c4a02916de = function(arg0, arg1) {
    var ret = Object.is(getObject(arg0), getObject(arg1));
    return ret;
};

export const __wbg_buttons_dff0494da85871b5 = function(arg0) {
    var ret = getObject(arg0).buttons;
    return ret;
};

export const __wbg_getBoundingClientRect_c6d612c06726983e = function(arg0) {
    var ret = getObject(arg0).getBoundingClientRect();
    return addHeapObject(ret);
};

export const __wbg_clientX_c1a2c3a6a07188a2 = function(arg0) {
    var ret = getObject(arg0).clientX;
    return ret;
};

export const __wbg_x_b6f5535a24742b80 = function(arg0) {
    var ret = getObject(arg0).x;
    return ret;
};

export const __wbg_clientY_090f8ba07f76875d = function(arg0) {
    var ret = getObject(arg0).clientY;
    return ret;
};

export const __wbg_y_580fdbaf51490604 = function(arg0) {
    var ret = getObject(arg0).y;
    return ret;
};

export const __wbg_document_6cc8d0b87c0a99b9 = function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_exitFullscreen_cbab2d88768d31dc = function(arg0) {
    getObject(arg0).exitFullscreen();
};

export const __wbg_error_1305f569bc9e150d = function(arg0, arg1) {
    console.error(getObject(arg0), getObject(arg1));
};

export const __wbg_addEventListener_f0baf69c9c7425c9 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
});

export const __wbg_requestAnimationFrame_89935c9d6ac25d2f = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
    return ret;
});

export const __wbg_setTimeout_eaf00c9296a6ab88 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
    return ret;
});

export const __wbg_querySelector_69fd5cd784bcc892 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

export const __wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3 = function(arg0) {
    var ret = getObject(arg0) instanceof HTMLCanvasElement;
    return ret;
};

export const __wbg_createElement_5bdf88a5af9f17c5 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

export const __wbg_get_a0f7f23dc0b8d32b = function(arg0, arg1, arg2) {
    var ret = getObject(arg0)[getStringFromWasm0(arg1, arg2)];
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_body_8c888fe47d81765f = function(arg0) {
    var ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_appendChild_77215fd672b162c5 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
});

export const __wbg_new_59cb74e423758ede = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

export const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
};

export const __wbg_static_accessor_MODULE_abf5ae284bffdf45 = function() {
    var ret = module;
    return addHeapObject(ret);
};

export const __wbg_cargowebsnippet9a7eca60ef721cc6257c116658f2fcdd49070cd1_da979f7a7a4ebfc0 = function(arg0, arg1) {
    __cargo_web_snippet_9a7eca60ef721cc6257c116658f2fcdd49070cd1(takeObject(arg0), arg1);
};

export const __wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_5a8953894b8affd6 = function(arg0, arg1) {
    __cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0(takeObject(arg0), arg1);
};

export const __wbg_cargowebsnippet7da4da5c1d6778b3677e0a3133c1c2613594e3f4_df29dfefa4c72388 = function(arg0, arg1) {
    var ret = __cargo_web_snippet_7da4da5c1d6778b3677e0a3133c1c2613594e3f4(takeObject(arg0), arg1);
    return ret;
};

export const __wbg_cargowebsnippet5c57e16ebd22655f976d87fae8039e282d7bab59_ad29da5ae967b2d2 = function(arg0, arg1) {
    __cargo_web_snippet_5c57e16ebd22655f976d87fae8039e282d7bab59(takeObject(arg0), arg1);
};

export const __wbg_cargowebsnippet5c3091ae7fa9c42123eec37f64de99a5808e7ef2_fc0bd84666f3fba5 = function(arg0, arg1) {
    var ret = __cargo_web_snippet_5c3091ae7fa9c42123eec37f64de99a5808e7ef2(takeObject(arg0), arg1);
    return ret;
};

export const __wbg_cargowebsnippet8c32019649bb581b1b742eeedfc410e2bedd56a6_fe72322db9f33c63 = function(arg0, arg1, arg2) {
    __cargo_web_snippet_8c32019649bb581b1b742eeedfc410e2bedd56a6(takeObject(arg0), arg1, arg2);
};

export const __wbg_cargowebsnippetecd8f83530fd9b57edbdc4822b4ea5b373e3a927_4b05cce5d27da5ee = function(arg0, arg1) {
    var ret = __cargo_web_snippet_ecd8f83530fd9b57edbdc4822b4ea5b373e3a927(takeObject(arg0), arg1);
    return ret;
};

export const __wbg_get_0e3f2950cdf758ae = handleError(function(arg0, arg1) {
    var ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
});

export const __wbg_now_49847177a6d1d57e = function(arg0) {
    var ret = getObject(arg0).now();
    return ret;
};

export const __wbg_self_07b2f89e82ceb76d = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

export const __wbg_window_ba85d88572adc0dc = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

export const __wbg_globalThis_b9277fc37e201fe5 = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

export const __wbg_global_e16303fe83e1d57f = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

export const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

export const __wbg_newnoargs_f3b8a801d5d4b079 = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export const __wbg_call_8e95613cc6524977 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

export const __wbg_set_304f2ec1a3ab3b79 = handleError(function(arg0, arg1, arg2) {
    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
});

export const __wbg_self_1c83eb4471d9eb9b = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

export const __wbg_require_5b2b5b594d809d9f = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
};

export const __wbg_crypto_c12f14e810edcaa2 = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

export const __wbg_msCrypto_679be765111ba775 = function(arg0) {
    var ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
};

export const __wbg_getRandomValues_05a60bf171bfc2be = function(arg0) {
    var ret = getObject(arg0).getRandomValues;
    return addHeapObject(ret);
};

export const __wbg_getRandomValues_3ac1b33c90b52596 = function(arg0, arg1, arg2) {
    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
};

export const __wbg_randomFillSync_6f956029658662ec = function(arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
};

export const __wbindgen_function_table = function() {
    var ret = wasm.__wbindgen_export_0;
    return addHeapObject(ret);
};

export const __wbg_wasmbindgeninitialize_c1c4df6b494511ad = function(arg0, arg1, arg2, arg3) {
    var ret = wasm_bindgen_initialize(takeObject(arg0), takeObject(arg1), getObject(arg2), getObject(arg3));
    return addHeapObject(ret);
};

export const __wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_6d353463ef525961 = function(arg0) {
    __cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63(takeObject(arg0));
};

export const __wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce5c721cab10d020 = function(arg0) {
    __cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf(takeObject(arg0));
};

export const __wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_a438202dc16f44c0 = function(arg0, arg1, arg2) {
    __cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6(takeObject(arg0), arg1, arg2);
};

export const __wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_ece3da0a4474dbeb = function(arg0, arg1, arg2, arg3) {
    __cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723(takeObject(arg0), arg1, arg2, arg3);
};

export const __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

export const __wbg_then_3b7ac098cfda2fa5 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

export const __wbg_then_4a7a614abbbe6d81 = function(arg0, arg1) {
    var ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
};

export const __wbg_resolve_2529512c3bb73938 = function(arg0) {
    var ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
};

export const __wbg_getActiveUniformBlockParameter_6f20ffcfa5fe017f = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getActiveUniformBlockParameter(getObject(arg1), arg2 >>> 0, arg3 >>> 0);
    return addHeapObject(ret);
});

export const __wbg_getParameter_d680f5c6d50aba30 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).getParameter(arg1 >>> 0);
    return addHeapObject(ret);
});

export const __wbg_instanceof_Window_adf3196bdc02b386 = function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    return ret;
};

export const __wbg_addEventListener_9e7b0c3f65ebc0d7 = handleError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
});

export const __wbg_removeEventListener_e118aefce350c930 = handleError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
});

export const __wbg_requestFullscreen_7c9e8be46f97059a = handleError(function(arg0) {
    getObject(arg0).requestFullscreen();
});

export const __wbg_setAttribute_727bdb9763037624 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
});

export const __wbg_devicePixelRatio_599d41a9267fa1ca = function(arg0) {
    var ret = getObject(arg0).devicePixelRatio;
    return ret;
};

export const __wbg_setwidth_5f26a8ba9dbfa0d0 = function(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
};

export const __wbg_setheight_70f62727aa9383c2 = function(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
};

export const __wbg_style_9a41d46c005f7596 = function(arg0) {
    var ret = getObject(arg0).style;
    return addHeapObject(ret);
};

export const __wbg_setProperty_42eabadfcd7d6199 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
});

export const __wbg_fullscreenElement_449980d04fa17948 = function(arg0) {
    var ret = getObject(arg0).fullscreenElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_matchMedia_443fe61cbc261085 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).matchMedia(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

export const __wbg_addListener_4c9824b666156827 = handleError(function(arg0, arg1) {
    getObject(arg0).addListener(getObject(arg1));
});

export const __wbg_removeListener_41c93a0631902b08 = handleError(function(arg0, arg1) {
    getObject(arg0).removeListener(getObject(arg1));
});

export const __wbg_matches_5d4345bfa1b9551b = function(arg0) {
    var ret = getObject(arg0).matches;
    return ret;
};

export const __wbg_clearTimeout_dd3fc8919742efa0 = function(arg0, arg1) {
    getObject(arg0).clearTimeout(arg1);
};

export const __wbg_cancelAnimationFrame_7f3ba4191e67c86b = handleError(function(arg0, arg1) {
    getObject(arg0).cancelAnimationFrame(arg1);
});

export const __wbg_button_13536d578538c005 = function(arg0) {
    var ret = getObject(arg0).button;
    return ret;
};

export const __wbg_shiftKey_3ed819c2157c6170 = function(arg0) {
    var ret = getObject(arg0).shiftKey;
    return ret;
};

export const __wbg_ctrlKey_6ff5d3368ab5c157 = function(arg0) {
    var ret = getObject(arg0).ctrlKey;
    return ret;
};

export const __wbg_altKey_70d44f4345c386d7 = function(arg0) {
    var ret = getObject(arg0).altKey;
    return ret;
};

export const __wbg_metaKey_bd8efb2d7ff639ad = function(arg0) {
    var ret = getObject(arg0).metaKey;
    return ret;
};

export const __wbg_code_c3b28f37b4149e68 = function(arg0, arg1) {
    var ret = getObject(arg1).code;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_shiftKey_d11f615955404512 = function(arg0) {
    var ret = getObject(arg0).shiftKey;
    return ret;
};

export const __wbg_metaKey_9bc40bb1d5972ef2 = function(arg0) {
    var ret = getObject(arg0).metaKey;
    return ret;
};

export const __wbindgen_closure_wrapper862 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 43, __wbg_adapter_24);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper10341 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 494, __wbg_adapter_27);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper10344 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 501, __wbg_adapter_30);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper10386 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 498, __wbg_adapter_33);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper10397 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 505, __wbg_adapter_36);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper10403 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 509, __wbg_adapter_39);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper10409 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 513, __wbg_adapter_42);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper10415 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 517, __wbg_adapter_45);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper10421 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 521, __wbg_adapter_48);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper14525 = function(arg0, arg1, arg2) {
    var ret = makeClosure(arg0, arg1, 650, __wbg_adapter_51);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper14529 = function(arg0, arg1, arg2) {
    var ret = makeClosure(arg0, arg1, 654, __wbg_adapter_54);
    return addHeapObject(ret);
};

export const __wbindgen_closure_wrapper15107 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 665, __wbg_adapter_57);
    return addHeapObject(ret);
};
