(function(){dust.register("header.dust",body_0);var blocks={"header":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("/master",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<h1> LAYOUT MASTER HEADER </h1>");}return body_0;})();