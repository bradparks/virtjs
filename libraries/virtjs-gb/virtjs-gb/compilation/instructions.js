export var x8_t  = { };
export var i8_t  = { };
export var u8_t  = { };
export var u16_t = { };

export var instructions = {

    0x00   : [ 'NOP', [ ], { } ],
    0x01   : [ 'LD_r16_u16', [ 'bc', u16_t ], { } ],
    0x02   : [ 'LD_(r16)_r8', [ 'bc', 'a' ], { } ],
    0x03   : [ 'INC_r16', [ 'bc' ], { } ],
    0x04   : [ 'INC_r8', [ 'b' ], { } ],
    0x05   : [ 'DEC_r8', [ 'b' ], { } ],
    0x06   : [ 'LD_r8_u8', [ 'b', u8_t ], { } ],
    0x07   : [ 'RLCA', [ ], { } ],
    0x08   : [ 'LD_(u16)_r16', [ u16_t, 'sp' ], { } ],
    0x09   : [ 'ADD_r16_r16', [ 'hl', 'bc' ], { } ],
    0x0A   : [ 'LD_r8_(r16)', [ 'a', 'bc' ], { } ],
    0x0B   : [ 'DEC_r16', [ 'bc' ], { } ],
    0x0C   : [ 'INC_r8', [ 'c' ], { } ],
    0x0D   : [ 'DEC_r8', [ 'c' ], { } ],
    0x0E   : [ 'LD_r8_u8', [ 'c', u8_t ], { } ],
    0x0F   : [ 'RRCA', [ ], { } ],

    0x10   : [ 'STOP_u8', [ u8_t ], { final   : true } ],
    0x11   : [ 'LD_r16_u16', [ 'de', u16_t ], { } ],
    0x12   : [ 'LD_(r16)_r8', [ 'de', 'a' ], { } ],
    0x13   : [ 'INC_r16', [ 'de' ], { } ],
    0x14   : [ 'INC_r8', [ 'd' ], { } ],
    0x15   : [ 'DEC_r8', [ 'd' ], { } ],
    0x16   : [ 'LD_r8_u8', [ 'd', u8_t ], { } ],
    0x17   : [ 'RLA', [ ], { } ],
    0x18   : [ 'JR_i8', [ i8_t ], { final   : true } ],
    0x19   : [ 'ADD_r16_r16', [ 'hl', 'de' ], { } ],
    0x1A   : [ 'LD_r8_(r16)', [ 'a', 'de' ], { } ],
    0x1B   : [ 'DEC_r16', [ 'de' ], { } ],
    0x1C   : [ 'INC_r8', [ 'e' ], { } ],
    0x1D   : [ 'DEC_r8', [ 'e' ], { } ],
    0x1E   : [ 'LD_r8_u8', [ 'e', u8_t ], { } ],
    0x1F   : [ 'RRA', [ ], { } ],

    0x20   : [ 'JR_NZ_i8', [ i8_t ], { } ],
    0x21   : [ 'LD_r16_u16', [ 'hl', u16_t ], { } ],
    0x22   : [ 'LDI_(r16)_r8', [ 'hl', 'a' ], { } ],
    0x23   : [ 'INC_r16', [ 'hl' ], { } ],
    0x24   : [ 'INC_r8', [ 'h' ], { } ],
    0x25   : [ 'DEC_r8', [ 'h' ], { } ],
    0x26   : [ 'LD_r8_u8', [ 'h', u8_t ], { } ],
    0x27   : [ 'DAA', [ ], { } ],
    0x28   : [ 'JR_Z_i8', [ i8_t ], { } ],
    0x29   : [ 'ADD_r16_r16', [ 'hl', 'hl' ], { } ],
    0x2A   : [ 'LDI_r8_(r16)', [ 'a', 'hl' ], { } ],
    0x2B   : [ 'DEC_r16', [ 'hl' ], { } ],
    0x2C   : [ 'INC_r8', [ 'l' ], { } ],
    0x2D   : [ 'DEC_r8', [ 'l' ], { } ],
    0x2E   : [ 'LD_r8_u8', [ 'l', u8_t ], { } ],
    0x2F   : [ 'CPL_r8', [ 'a' ], { } ],

    0x30   : [ 'JR_NC_i8', [ i8_t ], { } ],
    0x31   : [ 'LD_r16_u16', [ 'sp', u16_t ], { } ],
    0x32   : [ 'LDD_(r16)_r8', [ 'hl', 'a' ], { } ],
    0x33   : [ 'INC_r16', [ 'sp' ], { } ],
    0x34   : [ 'INC_(r16)', [ 'hl' ], { } ],
    0x35   : [ 'DEC_(r16)', [ 'hl' ], { } ],
    0x36   : [ 'LD_(r16)_u8', [ 'hl', u8_t ], { } ],
    0x37   : [ 'SCF', [ ], { } ],
    0x38   : [ 'JR_C_i8', [ i8_t ], { } ],
    0x39   : [ 'ADD_r16_r16', [ 'hl', 'sp' ], { } ],
    0x3A   : [ 'LDD_r8_(r16)', [ 'a', 'hl' ], { } ],
    0x3B   : [ 'DEC_r16', [ 'sp' ], { } ],
    0x3C   : [ 'INC_r8', [ 'a' ], { } ],
    0x3D   : [ 'DEC_r8', [ 'a' ], { } ],
    0x3E   : [ 'LD_r8_u8', [ 'a', u8_t ], { } ],
    0x3F   : [ 'CCF', [ ], { } ],

    0x40   : [ 'LD_r8_r8', [ 'b', 'b' ], { } ],
    0x41   : [ 'LD_r8_r8', [ 'b', 'c' ], { } ],
    0x42   : [ 'LD_r8_r8', [ 'b', 'd' ], { } ],
    0x43   : [ 'LD_r8_r8', [ 'b', 'e' ], { } ],
    0x44   : [ 'LD_r8_r8', [ 'b', 'h' ], { } ],
    0x45   : [ 'LD_r8_r8', [ 'b', 'l' ], { } ],
    0x46   : [ 'LD_r8_(r16)', [ 'b', 'hl' ], { } ],
    0x47   : [ 'LD_r8_r8', [ 'b', 'a' ], { } ],
    0x48   : [ 'LD_r8_r8', [ 'c', 'b' ], { } ],
    0x49   : [ 'LD_r8_r8', [ 'c', 'c' ], { } ],
    0x4A   : [ 'LD_r8_r8', [ 'c', 'd' ], { } ],
    0x4B   : [ 'LD_r8_r8', [ 'c', 'e' ], { } ],
    0x4C   : [ 'LD_r8_r8', [ 'c', 'h' ], { } ],
    0x4D   : [ 'LD_r8_r8', [ 'c', 'l' ], { } ],
    0x4E   : [ 'LD_r8_(r16)', [ 'c', 'hl' ], { } ],
    0x4F   : [ 'LD_r8_r8', [ 'c', 'a' ], { } ],

    0x50   : [ 'LD_r8_r8', [ 'd', 'b' ], { } ],
    0x51   : [ 'LD_r8_r8', [ 'd', 'c' ], { } ],
    0x52   : [ 'LD_r8_r8', [ 'd', 'd' ], { } ],
    0x53   : [ 'LD_r8_r8', [ 'd', 'e' ], { } ],
    0x54   : [ 'LD_r8_r8', [ 'd', 'h' ], { } ],
    0x55   : [ 'LD_r8_r8', [ 'd', 'l' ], { } ],
    0x56   : [ 'LD_r8_(r16)', [ 'd', 'hl' ], { } ],
    0x57   : [ 'LD_r8_r8', [ 'd', 'a' ], { } ],
    0x58   : [ 'LD_r8_r8', [ 'e', 'b' ], { } ],
    0x59   : [ 'LD_r8_r8', [ 'e', 'c' ], { } ],
    0x5A   : [ 'LD_r8_r8', [ 'e', 'd' ], { } ],
    0x5B   : [ 'LD_r8_r8', [ 'e', 'e' ], { } ],
    0x5C   : [ 'LD_r8_r8', [ 'e', 'h' ], { } ],
    0x5D   : [ 'LD_r8_r8', [ 'e', 'l' ], { } ],
    0x5E   : [ 'LD_r8_(r16)', [ 'e', 'hl' ], { } ],
    0x5F   : [ 'LD_r8_r8', [ 'e', 'a' ], { } ],

    0x60   : [ 'LD_r8_r8', [ 'h', 'b' ], { } ],
    0x61   : [ 'LD_r8_r8', [ 'h', 'c' ], { } ],
    0x62   : [ 'LD_r8_r8', [ 'h', 'd' ], { } ],
    0x63   : [ 'LD_r8_r8', [ 'h', 'e' ], { } ],
    0x64   : [ 'LD_r8_r8', [ 'h', 'h' ], { } ],
    0x65   : [ 'LD_r8_r8', [ 'h', 'l' ], { } ],
    0x66   : [ 'LD_r8_(r16)', [ 'h', 'hl' ], { } ],
    0x67   : [ 'LD_r8_r8', [ 'h', 'a' ], { } ],
    0x68   : [ 'LD_r8_r8', [ 'l', 'b' ], { } ],
    0x69   : [ 'LD_r8_r8', [ 'l', 'c' ], { } ],
    0x6A   : [ 'LD_r8_r8', [ 'l', 'd' ], { } ],
    0x6B   : [ 'LD_r8_r8', [ 'l', 'e' ], { } ],
    0x6C   : [ 'LD_r8_r8', [ 'l', 'h' ], { } ],
    0x6D   : [ 'LD_r8_r8', [ 'l', 'l' ], { } ],
    0x6E   : [ 'LD_r8_(r16)', [ 'l', 'hl' ], { } ],
    0x6F   : [ 'LD_r8_r8', [ 'l', 'a' ], { } ],

    0x70   : [ 'LD_(r16)_r8', [ 'hl', 'b' ], { } ],
    0x71   : [ 'LD_(r16)_r8', [ 'hl', 'c' ], { } ],
    0x72   : [ 'LD_(r16)_r8', [ 'hl', 'd' ], { } ],
    0x73   : [ 'LD_(r16)_r8', [ 'hl', 'e' ], { } ],
    0x74   : [ 'LD_(r16)_r8', [ 'hl', 'h' ], { } ],
    0x75   : [ 'LD_(r16)_r8', [ 'hl', 'l' ], { } ],
    0x76   : [ 'HALT', [ ], { final   : true } ],
    0x77   : [ 'LD_(r16)_r8', [ 'hl', 'a' ], { } ],
    0x78   : [ 'LD_r8_r8', [ 'a', 'b' ], { } ],
    0x79   : [ 'LD_r8_r8', [ 'a', 'c' ], { } ],
    0x7A   : [ 'LD_r8_r8', [ 'a', 'd' ], { } ],
    0x7B   : [ 'LD_r8_r8', [ 'a', 'e' ], { } ],
    0x7C   : [ 'LD_r8_r8', [ 'a', 'h' ], { } ],
    0x7D   : [ 'LD_r8_r8', [ 'a', 'l' ], { } ],
    0x7E   : [ 'LD_r8_(r16)', [ 'a', 'hl' ], { } ],
    0x7F   : [ 'LD_r8_r8', [ 'a', 'a' ], { } ],

    0x80   : [ 'ADD_r8_r8', [ 'a', 'b' ], { } ],
    0x81   : [ 'ADD_r8_r8', [ 'a', 'c' ], { } ],
    0x82   : [ 'ADD_r8_r8', [ 'a', 'd' ], { } ],
    0x83   : [ 'ADD_r8_r8', [ 'a', 'e' ], { } ],
    0x84   : [ 'ADD_r8_r8', [ 'a', 'h' ], { } ],
    0x85   : [ 'ADD_r8_r8', [ 'a', 'l' ], { } ],
    0x86   : [ 'ADD_r8_(r16)', [ 'a', 'hl' ], { } ],
    0x87   : [ 'ADD_r8_r8', [ 'a', 'a' ], { } ],
    0x88   : [ 'ADC_r8_r8', [ 'a', 'b' ], { } ],
    0x89   : [ 'ADC_r8_r8', [ 'a', 'c' ], { } ],
    0x8A   : [ 'ADC_r8_r8', [ 'a', 'd' ], { } ],
    0x8B   : [ 'ADC_r8_r8', [ 'a', 'e' ], { } ],
    0x8C   : [ 'ADC_r8_r8', [ 'a', 'h' ], { } ],
    0x8D   : [ 'ADC_r8_r8', [ 'a', 'l' ], { } ],
    0x8E   : [ 'ADC_r8_(r16)', [ 'a', 'hl' ], { } ],
    0x8F   : [ 'ADC_r8_r8', [ 'a', 'a' ], { } ],

    0x90   : [ 'SUB_r8_r8', [ 'a', 'b' ], { } ],
    0x91   : [ 'SUB_r8_r8', [ 'a', 'c' ], { } ],
    0x92   : [ 'SUB_r8_r8', [ 'a', 'd' ], { } ],
    0x93   : [ 'SUB_r8_r8', [ 'a', 'e' ], { } ],
    0x94   : [ 'SUB_r8_r8', [ 'a', 'h' ], { } ],
    0x95   : [ 'SUB_r8_r8', [ 'a', 'l' ], { } ],
    0x96   : [ 'SUB_r8_(r16)', [ 'a', 'hl' ], { } ],
    0x97   : [ 'SUB_r8_r8', [ 'a', 'a' ], { } ],
    0x98   : [ 'SBC_r8_r8', [ 'a', 'b' ], { } ],
    0x99   : [ 'SBC_r8_r8', [ 'a', 'c' ], { } ],
    0x9A   : [ 'SBC_r8_r8', [ 'a', 'd' ], { } ],
    0x9B   : [ 'SBC_r8_r8', [ 'a', 'e' ], { } ],
    0x9C   : [ 'SBC_r8_r8', [ 'a', 'h' ], { } ],
    0x9D   : [ 'SBC_r8_r8', [ 'a', 'l' ], { } ],
    0x9E   : [ 'SBC_r8_(r16)', [ 'a', 'hl' ], { } ],
    0x9F   : [ 'SBC_r8_r8', [ 'a', 'a' ], { } ],

    0xA0   : [ 'AND_r8_r8', [ 'a', 'b' ], { } ],
    0xA1   : [ 'AND_r8_r8', [ 'a', 'c' ], { } ],
    0xA2   : [ 'AND_r8_r8', [ 'a', 'd' ], { } ],
    0xA3   : [ 'AND_r8_r8', [ 'a', 'e' ], { } ],
    0xA4   : [ 'AND_r8_r8', [ 'a', 'h' ], { } ],
    0xA5   : [ 'AND_r8_r8', [ 'a', 'l' ], { } ],
    0xA6   : [ 'AND_r8_(r16)', [ 'a', 'hl' ], { } ],
    0xA7   : [ 'AND_r8_r8', [ 'a', 'a' ], { } ],
    0xA9   : [ 'XOR_r8_r8', [ 'a', 'c' ], { } ],
    0xA8   : [ 'XOR_r8_r8', [ 'a', 'b' ], { } ],
    0xAA   : [ 'XOR_r8_r8', [ 'a', 'd' ], { } ],
    0xAB   : [ 'XOR_r8_r8', [ 'a', 'e' ], { } ],
    0xAC   : [ 'XOR_r8_r8', [ 'a', 'h' ], { } ],
    0xAD   : [ 'XOR_r8_r8', [ 'a', 'l' ], { } ],
    0xAE   : [ 'XOR_r8_(r16)', [ 'a', 'hl' ], { } ],
    0xAF   : [ 'XOR_r8_r8', [ 'a', 'a' ], { } ],

    0xB0   : [ 'OR_r8_r8', [ 'a', 'b' ], { } ],
    0xB1   : [ 'OR_r8_r8', [ 'a', 'c' ], { } ],
    0xB2   : [ 'OR_r8_r8', [ 'a', 'd' ], { } ],
    0xB3   : [ 'OR_r8_r8', [ 'a', 'e' ], { } ],
    0xB4   : [ 'OR_r8_r8', [ 'a', 'h' ], { } ],
    0xB5   : [ 'OR_r8_r8', [ 'a', 'l' ], { } ],
    0xB6   : [ 'OR_r8_(r16)', [ 'a', 'hl' ], { } ],
    0xB7   : [ 'OR_r8_r8', [ 'a', 'a' ], { } ],
    0xB8   : [ 'CP_r8_r8', [ 'a', 'b' ], { } ],
    0xB9   : [ 'CP_r8_r8', [ 'a', 'c' ], { } ],
    0xBA   : [ 'CP_r8_r8', [ 'a', 'd' ], { } ],
    0xBB   : [ 'CP_r8_r8', [ 'a', 'e' ], { } ],
    0xBC   : [ 'CP_r8_r8', [ 'a', 'h' ], { } ],
    0xBD   : [ 'CP_r8_r8', [ 'a', 'l' ], { } ],
    0xBE   : [ 'CP_r8_(r16)', [ 'a', 'hl' ], { } ],
    0xBF   : [ 'CP_r8_r8', [ 'a', 'a' ], { } ],

    0xC0   : [ 'RET_NZ', [ ], { } ],
    0xC1   : [ 'POP_r16', [ 'bc' ], { } ],
    0xC2   : [ 'JP_NZ_u16', [ u16_t ], { } ],
    0xC3   : [ 'JP_u16', [ u16_t ], { final   : true } ],
    0xC4   : [ 'CALL_NZ_u16', [ u16_t ], { } ],
    0xC5   : [ 'PUSH_r16', [ 'bc' ], { } ],
    0xC6   : [ 'ADD_r8_u8', [ 'a', u8_t ], { } ],
    0xC7   : [ 'RST_u8', [ 0x00 ], { final   : true } ],
    0xC8   : [ 'RET_Z', [ ], { } ],
    0xC9   : [ 'RET', [ ], { final   : true } ],
    0xCA   : [ 'JP_Z_u16', [ u16_t ], { } ],
    0xCB   : [ 'PREFIX_CB', [ u8_t ], { } ],
    0xCC   : [ 'CALL_Z_u16', [ u16_t ], { } ],
    0xCD   : [ 'CALL_u16', [ u16_t ], { final   : true, returns   : true } ],
    0xCE   : [ 'ADC_r8_u8', [ 'a', u8_t ], { } ],
    0xCF   : [ 'RST_u8', [ 0x08 ], { final   : true, returns   : true } ],

    0xD0   : [ 'RET_NC', [ ], { } ],
    0xD1   : [ 'POP_r16', [ 'de' ], { } ],
    0xD2   : [ 'JP_NC_u16', [ u16_t ], { } ],
    0xD3   : [ null, [ ], { } ],
    0xD4   : [ 'CALL_NC_u16', [ u16_t ], { } ],
    0xD5   : [ 'PUSH_r16', [ 'de' ], { } ],
    0xD6   : [ 'SUB_r8_u8', [ 'a', u8_t ], { } ],
    0xD7   : [ 'RST_u8', [ 0x10 ], { final   : true, returns   : true } ],
    0xD8   : [ 'RET_C', [ ], { } ],
    0xD9   : [ 'RETI', [ ], { final   : true } ],
    0xDA   : [ 'JP_C_u16', [ u16_t ], { } ],
    0xDB   : [ null, [ ], { } ],
    0xDC   : [ 'CALL_C_u16', [ u16_t ], { } ],
    0xDD   : [ null, [ ], { } ],
    0xDE   : [ 'SBC_r8_u8', [ 'a', u8_t ], { } ],
    0xDF   : [ 'RST_u8', [ 0x18 ], { final   : true, returns   : true } ],

    0xE0   : [ 'LDH_(u8)_r8', [ u8_t, 'a' ], { } ],
    0xE1   : [ 'POP_r16', [ 'hl' ], { } ],
    0xE2   : [ 'LD_(r8)_r8', [ 'c', 'a' ], { } ],
    0xE3   : [ null, [ ], { } ],
    0xE4   : [ null, [ ], { } ],
    0xE5   : [ 'PUSH_r16', [ 'hl' ], { } ],
    0xE6   : [ 'AND_r8_u8', [ 'a', u8_t ], { } ],
    0xE7   : [ 'RST_u8', [ 0x20 ], { final   : true, returns   : true } ],
    0xE8   : [ 'ADD_r16_i8', [ 'sp', i8_t ], { } ],
    0xE9   : [ 'JP_r16', [ 'hl' ], { final   : true } ],
    0xEA   : [ 'LD_(u16)_r8', [ u16_t, 'a' ], { } ],
    0xEB   : [ null, [ ], { } ],
    0xEC   : [ null, [ ], { } ],
    0xED   : [ null, [ ], { } ],
    0xEE   : [ 'XOR_r8_u8', [ 'a', u8_t ], { } ],
    0xEF   : [ 'RST_u8', [ 0x28 ], { final   : true, returns   : true } ],

    0xF0   : [ 'LDH_r8_(u8)', [ 'a', u8_t ], { } ],
    0xF1   : [ 'POP_AF', [ ], { } ],
    0xF2   : [ 'LD_r8_(r8)', [ 'a', 'c' ], { } ],
    0xF3   : [ 'DI', [ ], { interrupts   : false } ],
    0xF4   : [ null, [ ], { } ],
    0xF5   : [ 'PUSH_r16', [ 'af' ], { } ],
    0xF6   : [ 'OR_r8_u8', [ 'a', u8_t ], { } ],
    0xF7   : [ 'RST_u8', [ 0x30 ], { final   : true, returns   : true } ],
    0xF8   : [ 'LDHL_r16_i8', [ 'sp', i8_t ], { } ],
    0xF9   : [ 'LD_r16_r16', [ 'sp', 'hl' ], { } ],
    0xFA   : [ 'LD_r8_(u16)', [ 'a', u16_t ], { } ],
    0xFB   : [ 'EI', [ ], { interrupts   : true } ],
    0xFC   : [ null, [ ], { } ],
    0xFD   : [ null, [ ], { } ],
    0xFE   : [ 'CP_r8_u8', [ 'a', u8_t ], { } ],
    0xFF   : [ 'RST_u8', [ 0x38 ], { final   : true, returns   : true } ],

    0xCB00 : [ 'RLC_r8', [ x8_t, 'b' ], { } ],
    0xCB01 : [ 'RLC_r8', [ x8_t, 'c' ], { } ],
    0xCB02 : [ 'RLC_r8', [ x8_t, 'd' ], { } ],
    0xCB03 : [ 'RLC_r8', [ x8_t, 'e' ], { } ],
    0xCB04 : [ 'RLC_r8', [ x8_t, 'h' ], { } ],
    0xCB05 : [ 'RLC_r8', [ x8_t, 'l' ], { } ],
    0xCB06 : [ 'RLC_(r16)', [ x8_t, 'hl' ], { } ],
    0xCB07 : [ 'RLC_r8', [ x8_t, 'a' ], { } ],
    0xCB08 : [ 'RRC_r8', [ x8_t, 'b' ], { } ],
    0xCB09 : [ 'RRC_r8', [ x8_t, 'c' ], { } ],
    0xCB0A : [ 'RRC_r8', [ x8_t, 'd' ], { } ],
    0xCB0B : [ 'RRC_r8', [ x8_t, 'e' ], { } ],
    0xCB0C : [ 'RRC_r8', [ x8_t, 'h' ], { } ],
    0xCB0D : [ 'RRC_r8', [ x8_t, 'l' ], { } ],
    0xCB0E : [ 'RRC_(r16)', [ x8_t, 'hl' ], { } ],
    0xCB0F : [ 'RRC_r8', [ x8_t, 'a' ], { } ],

    0xCB10 : [ 'RL_r8', [ x8_t, 'b' ], { } ],
    0xCB11 : [ 'RL_r8', [ x8_t, 'c' ], { } ],
    0xCB12 : [ 'RL_r8', [ x8_t, 'd' ], { } ],
    0xCB13 : [ 'RL_r8', [ x8_t, 'e' ], { } ],
    0xCB14 : [ 'RL_r8', [ x8_t, 'h' ], { } ],
    0xCB15 : [ 'RL_r8', [ x8_t, 'l' ], { } ],
    0xCB16 : [ 'RL_(r16)', [ x8_t, 'hl' ], { } ],
    0xCB17 : [ 'RL_r8', [ x8_t, 'a' ], { } ],
    0xCB18 : [ 'RR_r8', [ x8_t, 'b' ], { } ],
    0xCB19 : [ 'RR_r8', [ x8_t, 'c' ], { } ],
    0xCB1A : [ 'RR_r8', [ x8_t, 'd' ], { } ],
    0xCB1B : [ 'RR_r8', [ x8_t, 'e' ], { } ],
    0xCB1C : [ 'RR_r8', [ x8_t, 'h' ], { } ],
    0xCB1D : [ 'RR_r8', [ x8_t, 'l' ], { } ],
    0xCB1E : [ 'RR_(r16)', [ x8_t, 'hl' ], { } ],
    0xCB1F : [ 'RR_r8', [ x8_t, 'a' ], { } ],

    0xCB20 : [ 'SLA_r8', [ x8_t, 'b' ], { } ],
    0xCB21 : [ 'SLA_r8', [ x8_t, 'c' ], { } ],
    0xCB22 : [ 'SLA_r8', [ x8_t, 'd' ], { } ],
    0xCB23 : [ 'SLA_r8', [ x8_t, 'e' ], { } ],
    0xCB24 : [ 'SLA_r8', [ x8_t, 'h' ], { } ],
    0xCB25 : [ 'SLA_r8', [ x8_t, 'l' ], { } ],
    0xCB26 : [ 'SLA_(r16)', [ x8_t, 'hl' ], { } ],
    0xCB27 : [ 'SLA_r8', [ x8_t, 'a' ], { } ],
    0xCB28 : [ 'SRA_r8', [ x8_t, 'b' ], { } ],
    0xCB29 : [ 'SRA_r8', [ x8_t, 'c' ], { } ],
    0xCB2A : [ 'SRA_r8', [ x8_t, 'd' ], { } ],
    0xCB2B : [ 'SRA_r8', [ x8_t, 'e' ], { } ],
    0xCB2C : [ 'SRA_r8', [ x8_t, 'h' ], { } ],
    0xCB2D : [ 'SRA_r8', [ x8_t, 'l' ], { } ],
    0xCB2E : [ 'SRA_(r16)', [ x8_t, 'hl' ], { } ],
    0xCB2F : [ 'SRA_r8', [ x8_t, 'a' ], { } ],

    0xCB30 : [ 'SWAP_r8', [ x8_t, 'b' ], { } ],
    0xCB31 : [ 'SWAP_r8', [ x8_t, 'c' ], { } ],
    0xCB32 : [ 'SWAP_r8', [ x8_t, 'd' ], { } ],
    0xCB33 : [ 'SWAP_r8', [ x8_t, 'e' ], { } ],
    0xCB34 : [ 'SWAP_r8', [ x8_t, 'h' ], { } ],
    0xCB35 : [ 'SWAP_r8', [ x8_t, 'l' ], { } ],
    0xCB36 : [ 'SWAP_(r16)', [ x8_t, 'hl' ], { } ],
    0xCB37 : [ 'SWAP_r8', [ x8_t, 'a' ], { } ],
    0xCB38 : [ 'SRL_r8', [ x8_t, 'b' ], { } ],
    0xCB39 : [ 'SRL_r8', [ x8_t, 'c' ], { } ],
    0xCB3A : [ 'SRL_r8', [ x8_t, 'd' ], { } ],
    0xCB3B : [ 'SRL_r8', [ x8_t, 'e' ], { } ],
    0xCB3C : [ 'SRL_r8', [ x8_t, 'h' ], { } ],
    0xCB3D : [ 'SRL_r8', [ x8_t, 'l' ], { } ],
    0xCB3E : [ 'SRL_(r16)', [ x8_t, 'hl' ], { } ],
    0xCB3F : [ 'SRL_r8', [ x8_t, 'a' ], { } ],

    0xCB40 : [ 'BIT_u8_r8', [ x8_t, 0, 'b' ], { } ],
    0xCB41 : [ 'BIT_u8_r8', [ x8_t, 0, 'c' ], { } ],
    0xCB42 : [ 'BIT_u8_r8', [ x8_t, 0, 'd' ], { } ],
    0xCB43 : [ 'BIT_u8_r8', [ x8_t, 0, 'e' ], { } ],
    0xCB44 : [ 'BIT_u8_r8', [ x8_t, 0, 'h' ], { } ],
    0xCB45 : [ 'BIT_u8_r8', [ x8_t, 0, 'l' ], { } ],
    0xCB46 : [ 'BIT_u8_(r16)', [ x8_t, 0, 'hl' ], { } ],
    0xCB47 : [ 'BIT_u8_r8', [ x8_t, 0, 'a' ], { } ],
    0xCB48 : [ 'BIT_u8_r8', [ x8_t, 1, 'b' ], { } ],
    0xCB49 : [ 'BIT_u8_r8', [ x8_t, 1, 'c' ], { } ],
    0xCB4A : [ 'BIT_u8_r8', [ x8_t, 1, 'd' ], { } ],
    0xCB4B : [ 'BIT_u8_r8', [ x8_t, 1, 'e' ], { } ],
    0xCB4C : [ 'BIT_u8_r8', [ x8_t, 1, 'h' ], { } ],
    0xCB4D : [ 'BIT_u8_r8', [ x8_t, 1, 'l' ], { } ],
    0xCB4E : [ 'BIT_u8_(r16)', [ x8_t, 1, 'hl' ], { } ],
    0xCB4F : [ 'BIT_u8_r8', [ x8_t, 1, 'a' ], { } ],

    0xCB50 : [ 'BIT_u8_r8', [ x8_t, 2, 'b' ], { } ],
    0xCB51 : [ 'BIT_u8_r8', [ x8_t, 2, 'c' ], { } ],
    0xCB52 : [ 'BIT_u8_r8', [ x8_t, 2, 'd' ], { } ],
    0xCB53 : [ 'BIT_u8_r8', [ x8_t, 2, 'e' ], { } ],
    0xCB54 : [ 'BIT_u8_r8', [ x8_t, 2, 'h' ], { } ],
    0xCB55 : [ 'BIT_u8_r8', [ x8_t, 2, 'l' ], { } ],
    0xCB56 : [ 'BIT_u8_(r16)', [ x8_t, 2, 'hl' ], { } ],
    0xCB57 : [ 'BIT_u8_r8', [ x8_t, 2, 'a' ], { } ],
    0xCB58 : [ 'BIT_u8_r8', [ x8_t, 3, 'b' ], { } ],
    0xCB59 : [ 'BIT_u8_r8', [ x8_t, 3, 'c' ], { } ],
    0xCB5A : [ 'BIT_u8_r8', [ x8_t, 3, 'd' ], { } ],
    0xCB5B : [ 'BIT_u8_r8', [ x8_t, 3, 'e' ], { } ],
    0xCB5C : [ 'BIT_u8_r8', [ x8_t, 3, 'h' ], { } ],
    0xCB5D : [ 'BIT_u8_r8', [ x8_t, 3, 'l' ], { } ],
    0xCB5E : [ 'BIT_u8_(r16)', [ x8_t, 3, 'hl' ], { } ],
    0xCB5F : [ 'BIT_u8_r8', [ x8_t, 3, 'a' ], { } ],

    0xCB60 : [ 'BIT_u8_r8', [ x8_t, 4, 'b' ], { } ],
    0xCB61 : [ 'BIT_u8_r8', [ x8_t, 4, 'c' ], { } ],
    0xCB62 : [ 'BIT_u8_r8', [ x8_t, 4, 'd' ], { } ],
    0xCB63 : [ 'BIT_u8_r8', [ x8_t, 4, 'e' ], { } ],
    0xCB64 : [ 'BIT_u8_r8', [ x8_t, 4, 'h' ], { } ],
    0xCB65 : [ 'BIT_u8_r8', [ x8_t, 4, 'l' ], { } ],
    0xCB66 : [ 'BIT_u8_(r16)', [ x8_t, 4, 'hl' ], { } ],
    0xCB67 : [ 'BIT_u8_r8', [ x8_t, 4, 'a' ], { } ],
    0xCB68 : [ 'BIT_u8_r8', [ x8_t, 5, 'b' ], { } ],
    0xCB69 : [ 'BIT_u8_r8', [ x8_t, 5, 'c' ], { } ],
    0xCB6A : [ 'BIT_u8_r8', [ x8_t, 5, 'd' ], { } ],
    0xCB6B : [ 'BIT_u8_r8', [ x8_t, 5, 'e' ], { } ],
    0xCB6C : [ 'BIT_u8_r8', [ x8_t, 5, 'h' ], { } ],
    0xCB6D : [ 'BIT_u8_r8', [ x8_t, 5, 'l' ], { } ],
    0xCB6E : [ 'BIT_u8_(r16)', [ x8_t, 5, 'hl' ], { } ],
    0xCB6F : [ 'BIT_u8_r8', [ x8_t, 5, 'a' ], { } ],

    0xCB70 : [ 'BIT_u8_r8', [ x8_t, 6, 'b' ], { } ],
    0xCB71 : [ 'BIT_u8_r8', [ x8_t, 6, 'c' ], { } ],
    0xCB72 : [ 'BIT_u8_r8', [ x8_t, 6, 'd' ], { } ],
    0xCB73 : [ 'BIT_u8_r8', [ x8_t, 6, 'e' ], { } ],
    0xCB74 : [ 'BIT_u8_r8', [ x8_t, 6, 'h' ], { } ],
    0xCB75 : [ 'BIT_u8_r8', [ x8_t, 6, 'l' ], { } ],
    0xCB76 : [ 'BIT_u8_(r16)', [ x8_t, 6, 'hl' ], { } ],
    0xCB77 : [ 'BIT_u8_r8', [ x8_t, 6, 'a' ], { } ],
    0xCB78 : [ 'BIT_u8_r8', [ x8_t, 7, 'b' ], { } ],
    0xCB79 : [ 'BIT_u8_r8', [ x8_t, 7, 'c' ], { } ],
    0xCB7A : [ 'BIT_u8_r8', [ x8_t, 7, 'd' ], { } ],
    0xCB7B : [ 'BIT_u8_r8', [ x8_t, 7, 'e' ], { } ],
    0xCB7C : [ 'BIT_u8_r8', [ x8_t, 7, 'h' ], { } ],
    0xCB7D : [ 'BIT_u8_r8', [ x8_t, 7, 'l' ], { } ],
    0xCB7E : [ 'BIT_u8_(r16)', [ x8_t, 7, 'hl' ], { } ],
    0xCB7F : [ 'BIT_u8_r8', [ x8_t, 7, 'a' ], { } ],

    0xCB80 : [ 'RES_u8_r8', [ x8_t, 0, 'b' ], { } ],
    0xCB81 : [ 'RES_u8_r8', [ x8_t, 0, 'c' ], { } ],
    0xCB82 : [ 'RES_u8_r8', [ x8_t, 0, 'd' ], { } ],
    0xCB83 : [ 'RES_u8_r8', [ x8_t, 0, 'e' ], { } ],
    0xCB84 : [ 'RES_u8_r8', [ x8_t, 0, 'h' ], { } ],
    0xCB85 : [ 'RES_u8_r8', [ x8_t, 0, 'l' ], { } ],
    0xCB86 : [ 'RES_u8_(r16)', [ x8_t, 0, 'hl' ], { } ],
    0xCB87 : [ 'RES_u8_r8', [ x8_t, 0, 'a' ], { } ],
    0xCB88 : [ 'RES_u8_r8', [ x8_t, 1, 'b' ], { } ],
    0xCB89 : [ 'RES_u8_r8', [ x8_t, 1, 'c' ], { } ],
    0xCB8A : [ 'RES_u8_r8', [ x8_t, 1, 'd' ], { } ],
    0xCB8B : [ 'RES_u8_r8', [ x8_t, 1, 'e' ], { } ],
    0xCB8C : [ 'RES_u8_r8', [ x8_t, 1, 'h' ], { } ],
    0xCB8D : [ 'RES_u8_r8', [ x8_t, 1, 'l' ], { } ],
    0xCB8E : [ 'RES_u8_(r16)', [ x8_t, 1, 'hl' ], { } ],
    0xCB8F : [ 'RES_u8_r8', [ x8_t, 1, 'a' ], { } ],

    0xCB90 : [ 'RES_u8_r8', [ x8_t, 2, 'b' ], { } ],
    0xCB91 : [ 'RES_u8_r8', [ x8_t, 2, 'c' ], { } ],
    0xCB92 : [ 'RES_u8_r8', [ x8_t, 2, 'd' ], { } ],
    0xCB93 : [ 'RES_u8_r8', [ x8_t, 2, 'e' ], { } ],
    0xCB94 : [ 'RES_u8_r8', [ x8_t, 2, 'h' ], { } ],
    0xCB95 : [ 'RES_u8_r8', [ x8_t, 2, 'l' ], { } ],
    0xCB96 : [ 'RES_u8_(r16)', [ x8_t, 2, 'hl' ], { } ],
    0xCB97 : [ 'RES_u8_r8', [ x8_t, 2, 'a' ], { } ],
    0xCB98 : [ 'RES_u8_r8', [ x8_t, 3, 'b' ], { } ],
    0xCB99 : [ 'RES_u8_r8', [ x8_t, 3, 'c' ], { } ],
    0xCB9A : [ 'RES_u8_r8', [ x8_t, 3, 'd' ], { } ],
    0xCB9B : [ 'RES_u8_r8', [ x8_t, 3, 'e' ], { } ],
    0xCB9C : [ 'RES_u8_r8', [ x8_t, 3, 'h' ], { } ],
    0xCB9D : [ 'RES_u8_r8', [ x8_t, 3, 'l' ], { } ],
    0xCB9E : [ 'RES_u8_(r16)', [ x8_t, 3, 'hl' ], { } ],
    0xCB9F : [ 'RES_u8_r8', [ x8_t, 3, 'a' ], { } ],

    0xCBA0 : [ 'RES_u8_r8', [ x8_t, 4, 'b' ], { } ],
    0xCBA1 : [ 'RES_u8_r8', [ x8_t, 4, 'c' ], { } ],
    0xCBA2 : [ 'RES_u8_r8', [ x8_t, 4, 'd' ], { } ],
    0xCBA3 : [ 'RES_u8_r8', [ x8_t, 4, 'e' ], { } ],
    0xCBA4 : [ 'RES_u8_r8', [ x8_t, 4, 'h' ], { } ],
    0xCBA5 : [ 'RES_u8_r8', [ x8_t, 4, 'l' ], { } ],
    0xCBA6 : [ 'RES_u8_(r16)', [ x8_t, 4, 'hl' ], { } ],
    0xCBA7 : [ 'RES_u8_r8', [ x8_t, 4, 'a' ], { } ],
    0xCBA8 : [ 'RES_u8_r8', [ x8_t, 5, 'b' ], { } ],
    0xCBA9 : [ 'RES_u8_r8', [ x8_t, 5, 'c' ], { } ],
    0xCBAA : [ 'RES_u8_r8', [ x8_t, 5, 'd' ], { } ],
    0xCBAB : [ 'RES_u8_r8', [ x8_t, 5, 'e' ], { } ],
    0xCBAC : [ 'RES_u8_r8', [ x8_t, 5, 'h' ], { } ],
    0xCBAD : [ 'RES_u8_r8', [ x8_t, 5, 'l' ], { } ],
    0xCBAE : [ 'RES_u8_(r16)', [ x8_t, 5, 'hl' ], { } ],
    0xCBAF : [ 'RES_u8_r8', [ x8_t, 5, 'a' ], { } ],

    0xCBB0 : [ 'RES_u8_r8', [ x8_t, 6, 'b' ], { } ],
    0xCBB1 : [ 'RES_u8_r8', [ x8_t, 6, 'c' ], { } ],
    0xCBB2 : [ 'RES_u8_r8', [ x8_t, 6, 'd' ], { } ],
    0xCBB3 : [ 'RES_u8_r8', [ x8_t, 6, 'e' ], { } ],
    0xCBB4 : [ 'RES_u8_r8', [ x8_t, 6, 'h' ], { } ],
    0xCBB5 : [ 'RES_u8_r8', [ x8_t, 6, 'l' ], { } ],
    0xCBB6 : [ 'RES_u8_(r16)', [ x8_t, 6, 'hl' ], { } ],
    0xCBB7 : [ 'RES_u8_r8', [ x8_t, 6, 'a' ], { } ],
    0xCBB8 : [ 'RES_u8_r8', [ x8_t, 7, 'b' ], { } ],
    0xCBB9 : [ 'RES_u8_r8', [ x8_t, 7, 'c' ], { } ],
    0xCBBA : [ 'RES_u8_r8', [ x8_t, 7, 'd' ], { } ],
    0xCBBB : [ 'RES_u8_r8', [ x8_t, 7, 'e' ], { } ],
    0xCBBC : [ 'RES_u8_r8', [ x8_t, 7, 'h' ], { } ],
    0xCBBD : [ 'RES_u8_r8', [ x8_t, 7, 'l' ], { } ],
    0xCBBE : [ 'RES_u8_(r16)', [ x8_t, 7, 'hl' ], { } ],
    0xCBBF : [ 'RES_u8_r8', [ x8_t, 7, 'a' ], { } ],

    0xCBC0 : [ 'SET_u8_r8', [ x8_t, 0, 'b' ], { } ],
    0xCBC1 : [ 'SET_u8_r8', [ x8_t, 0, 'c' ], { } ],
    0xCBC2 : [ 'SET_u8_r8', [ x8_t, 0, 'd' ], { } ],
    0xCBC3 : [ 'SET_u8_r8', [ x8_t, 0, 'e' ], { } ],
    0xCBC4 : [ 'SET_u8_r8', [ x8_t, 0, 'h' ], { } ],
    0xCBC5 : [ 'SET_u8_r8', [ x8_t, 0, 'l' ], { } ],
    0xCBC6 : [ 'SET_u8_(r16)', [ x8_t, 0, 'hl' ], { } ],
    0xCBC7 : [ 'SET_u8_r8', [ x8_t, 0, 'a' ], { } ],
    0xCBC8 : [ 'SET_u8_r8', [ x8_t, 1, 'b' ], { } ],
    0xCBC9 : [ 'SET_u8_r8', [ x8_t, 1, 'c' ], { } ],
    0xCBCA : [ 'SET_u8_r8', [ x8_t, 1, 'd' ], { } ],
    0xCBCB : [ 'SET_u8_r8', [ x8_t, 1, 'e' ], { } ],
    0xCBCC : [ 'SET_u8_r8', [ x8_t, 1, 'h' ], { } ],
    0xCBCD : [ 'SET_u8_r8', [ x8_t, 1, 'l' ], { } ],
    0xCBCE : [ 'SET_u8_(r16)', [ x8_t, 1, 'hl' ], { } ],
    0xCBCF : [ 'SET_u8_r8', [ x8_t, 1, 'a' ], { } ],

    0xCBD0 : [ 'SET_u8_r8', [ x8_t, 2, 'b' ], { } ],
    0xCBD1 : [ 'SET_u8_r8', [ x8_t, 2, 'c' ], { } ],
    0xCBD2 : [ 'SET_u8_r8', [ x8_t, 2, 'd' ], { } ],
    0xCBD3 : [ 'SET_u8_r8', [ x8_t, 2, 'e' ], { } ],
    0xCBD4 : [ 'SET_u8_r8', [ x8_t, 2, 'h' ], { } ],
    0xCBD5 : [ 'SET_u8_r8', [ x8_t, 2, 'l' ], { } ],
    0xCBD6 : [ 'SET_u8_(r16)', [ x8_t, 2, 'hl' ], { } ],
    0xCBD7 : [ 'SET_u8_r8', [ x8_t, 2, 'a' ], { } ],
    0xCBD8 : [ 'SET_u8_r8', [ x8_t, 3, 'b' ], { } ],
    0xCBD9 : [ 'SET_u8_r8', [ x8_t, 3, 'c' ], { } ],
    0xCBDA : [ 'SET_u8_r8', [ x8_t, 3, 'd' ], { } ],
    0xCBDB : [ 'SET_u8_r8', [ x8_t, 3, 'e' ], { } ],
    0xCBDC : [ 'SET_u8_r8', [ x8_t, 3, 'h' ], { } ],
    0xCBDD : [ 'SET_u8_r8', [ x8_t, 3, 'l' ], { } ],
    0xCBDE : [ 'SET_u8_(r16)', [ x8_t, 3, 'hl' ], { } ],
    0xCBDF : [ 'SET_u8_r8', [ x8_t, 3, 'a' ], { } ],

    0xCBE0 : [ 'SET_u8_r8', [ x8_t, 4, 'b' ], { } ],
    0xCBE1 : [ 'SET_u8_r8', [ x8_t, 4, 'c' ], { } ],
    0xCBE2 : [ 'SET_u8_r8', [ x8_t, 4, 'd' ], { } ],
    0xCBE3 : [ 'SET_u8_r8', [ x8_t, 4, 'e' ], { } ],
    0xCBE4 : [ 'SET_u8_r8', [ x8_t, 4, 'h' ], { } ],
    0xCBE5 : [ 'SET_u8_r8', [ x8_t, 4, 'l' ], { } ],
    0xCBE6 : [ 'SET_u8_(r16)', [ x8_t, 4, 'hl' ], { } ],
    0xCBE7 : [ 'SET_u8_r8', [ x8_t, 4, 'a' ], { } ],
    0xCBE8 : [ 'SET_u8_r8', [ x8_t, 5, 'b' ], { } ],
    0xCBE9 : [ 'SET_u8_r8', [ x8_t, 5, 'c' ], { } ],
    0xCBEA : [ 'SET_u8_r8', [ x8_t, 5, 'd' ], { } ],
    0xCBEB : [ 'SET_u8_r8', [ x8_t, 5, 'e' ], { } ],
    0xCBEC : [ 'SET_u8_r8', [ x8_t, 5, 'h' ], { } ],
    0xCBED : [ 'SET_u8_r8', [ x8_t, 5, 'l' ], { } ],
    0xCBEE : [ 'SET_u8_(r16)', [ x8_t, 5, 'hl' ], { } ],
    0xCBEF : [ 'SET_u8_r8', [ x8_t, 5, 'a' ], { } ],

    0xCBF0 : [ 'SET_u8_r8', [ x8_t, 6, 'b' ], { } ],
    0xCBF1 : [ 'SET_u8_r8', [ x8_t, 6, 'c' ], { } ],
    0xCBF2 : [ 'SET_u8_r8', [ x8_t, 6, 'd' ], { } ],
    0xCBF3 : [ 'SET_u8_r8', [ x8_t, 6, 'e' ], { } ],
    0xCBF4 : [ 'SET_u8_r8', [ x8_t, 6, 'h' ], { } ],
    0xCBF5 : [ 'SET_u8_r8', [ x8_t, 6, 'l' ], { } ],
    0xCBF6 : [ 'SET_u8_(r16)', [ x8_t, 6, 'hl' ], { } ],
    0xCBF7 : [ 'SET_u8_r8', [ x8_t, 6, 'a' ], { } ],
    0xCBF8 : [ 'SET_u8_r8', [ x8_t, 7, 'b' ], { } ],
    0xCBF9 : [ 'SET_u8_r8', [ x8_t, 7, 'c' ], { } ],
    0xCBFA : [ 'SET_u8_r8', [ x8_t, 7, 'd' ], { } ],
    0xCBFB : [ 'SET_u8_r8', [ x8_t, 7, 'e' ], { } ],
    0xCBFC : [ 'SET_u8_r8', [ x8_t, 7, 'h' ], { } ],
    0xCBFD : [ 'SET_u8_r8', [ x8_t, 7, 'l' ], { } ],
    0xCBFE : [ 'SET_u8_(r16)', [ x8_t, 7, 'hl' ], { } ],
    0xCBFF : [ 'SET_u8_r8', [ x8_t, 7, 'a' ], { } ]

};
