(function() {
    var type_impls = Object.fromEntries([["fastcrypto",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AesCtr%3CKeySize,+Aes%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/aes.rs.html#152-159\">source</a><a href=\"#impl-AesCtr%3CKeySize,+Aes%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;KeySize: ArrayLength&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>&gt;, Aes&gt; <a class=\"struct\" href=\"fastcrypto/aes/struct.AesCtr.html\" title=\"struct fastcrypto::aes::AesCtr\">AesCtr</a>&lt;KeySize, Aes&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/fastcrypto/aes.rs.html#153-158\">source</a><h4 class=\"code-header\">pub fn <a href=\"fastcrypto/aes/struct.AesCtr.html#tymethod.new\" class=\"fn\">new</a>(key: <a class=\"type\" href=\"fastcrypto/aes/type.AesKey.html\" title=\"type fastcrypto::aes::AesKey\">AesKey</a>&lt;KeySize&gt;) -&gt; Self</h4></section></div></details>",0,"fastcrypto::aes::Aes128Ctr","fastcrypto::aes::Aes192Ctr","fastcrypto::aes::Aes256Ctr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Cipher-for-AesCtr%3CKeySize,+Aes%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/fastcrypto/aes.rs.html#161-185\">source</a><a href=\"#impl-Cipher-for-AesCtr%3CKeySize,+Aes%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;KeySize: ArrayLength&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>&gt;, Aes&gt; <a class=\"trait\" href=\"fastcrypto/aes/trait.Cipher.html\" title=\"trait fastcrypto::aes::Cipher\">Cipher</a> for <a class=\"struct\" href=\"fastcrypto/aes/struct.AesCtr.html\" title=\"struct fastcrypto::aes::AesCtr\">AesCtr</a>&lt;KeySize, Aes&gt;<div class=\"where\">where\n    Aes: KeySizeUser&lt;KeySize = KeySize&gt; + KeyInit + BlockCipher + BlockSizeUser&lt;BlockSize = <a class=\"type\" href=\"https://docs.rs/typenum/1.16.0/typenum/generated/consts/type.U16.html\" title=\"type typenum::generated::consts::U16\">U16</a>&gt; + BlockEncrypt + BlockDecrypt,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.IVType\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/aes.rs.html#170\">source</a><a href=\"#associatedtype.IVType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"fastcrypto/aes/trait.Cipher.html#associatedtype.IVType\" class=\"associatedtype\">IVType</a> = <a class=\"struct\" href=\"fastcrypto/aes/struct.GenericByteArray.html\" title=\"struct fastcrypto::aes::GenericByteArray\">GenericByteArray</a>&lt;<a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>, <a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/typenum/1.16.0/typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.encrypt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/aes.rs.html#172-177\">source</a><a href=\"#method.encrypt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fastcrypto/aes/trait.Cipher.html#tymethod.encrypt\" class=\"fn\">encrypt</a>(&amp;self, iv: &amp;Self::<a class=\"associatedtype\" href=\"fastcrypto/aes/trait.Cipher.html#associatedtype.IVType\" title=\"type fastcrypto::aes::Cipher::IVType\">IVType</a>, plaintext: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>Encrypt <code>plaintext</code> using the given IV and return the result.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decrypt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fastcrypto/aes.rs.html#179-184\">source</a><a href=\"#method.decrypt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fastcrypto/aes/trait.Cipher.html#tymethod.decrypt\" class=\"fn\">decrypt</a>(\n    &amp;self,\n    iv: &amp;Self::<a class=\"associatedtype\" href=\"fastcrypto/aes/trait.Cipher.html#associatedtype.IVType\" title=\"type fastcrypto::aes::Cipher::IVType\">IVType</a>,\n    ciphertext: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"enum\" href=\"fastcrypto/error/enum.FastCryptoError.html\" title=\"enum fastcrypto::error::FastCryptoError\">FastCryptoError</a>&gt;</h4></section></summary><div class='docblock'>Decrypt <code>ciphertext</code> using the given IV and return the result. An error may be returned in\nCBC-mode if the ciphertext is not correctly padded, but in other modes this method always\nreturn Ok.</div></details></div></details>","Cipher","fastcrypto::aes::Aes128Ctr","fastcrypto::aes::Aes192Ctr","fastcrypto::aes::Aes256Ctr"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[6819]}