
# Other Cheat Sheets 

### Build your own DNS Servers

<p>
 <a href="https://calomel.org/unbound_dns.html"><b>Unbound DNS Tutorial</b></a> - a validating, recursive, and caching DNS server.<br/>
 <a href="https://www.ctrl.blog/entry/knot-dns-resolver-tutorial.html"><b>Knot Resolver on Fedora</b></a> - how to get faster and more secure DNS resolution with Knot Resolver on Fedora.<br/>
 <a href="https://www.aaflalo.me/2018/10/tutorial-setup-dns-over-https-server/"><b>DNS-over-HTTPS</b></a> - tutorial to setup your own DNS-over-HTTPS (DoH) server.<br/>
 <a href="https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/"><b>dns-over-https</b></a> - a cartoon intro to DNS over HTTPS.<br/>
 <a href="https://www.aaflalo.me/2019/03/dns-over-tls/"><b>DNS-over-TLS</b></a> - following to your DoH server, setup your DNS-over-TLS (DoT) server.<br/>
 <a href="https://zwischenzugs.com/2018/01/26/how-and-why-i-run-my-own-dns-servers/"><b>DNS Servers</b></a> - how (and why) i run my own DNS Servers.<br/>
</p>

### Build your own Certificate Authority

<p>
 <a href="https://jamielinux.com/docs/openssl-certificate-authority/"><b>OpenSSL Certificate Authority</b></a> - build your own certificate authority (CA) using the OpenSSL tools.<br/>
 <a href="https://github.com/smallstep/certificates"><b>step-ca Certificate Authority</b></a> - build your own certificate authority (CA) using open source step-ca.<br/>
</p>

### Build your own System/Virtual Machine

<p>
 <a href="https://github.com/cfenollosa/os-tutorial"><b>os-tutorial</b></a> - how to create an OS from scratch.<br/>
 <a href="https://justinmeiners.github.io/lc3-vm/"><b>Write your Own Virtual Machine</b></a> - how to write your own virtual machine (VM).<br/>
 <a href="https://github.com/cirosantilli/x86-bare-metal-examples"><b>x86 Bare Metal Examples</b></a> - dozens of minimal operating systems to learn x86 system programming.<br/>
 <a href="https://github.com/djhworld/simple-computer"><b>simple-computer</b></a> - the scott CPU from "But How Do It Know?" by J. Clark Scott.<br/>
 <a href="https://littleosbook.github.io/"><b>littleosbook</b></a> - the little book about OS development.<br/>
</p>

### DNS Servers list (privacy)

| <b><u>IP</u></b> | <b><u>URL</u></b> |
| :---         | :---         |
| **`84.200.69.80`** | [dns.watch](https://dns.watch/) |
| **`94.247.43.254`** | [opennic.org](https://www.opennic.org/) |
| **`64.6.64.6`** | [verisign.com](https://www.verisign.com/en_US/security-services/public-dns/index.xhtml) |
| **`89.233.43.71`** | [censurfridns.dk](https://blog.uncensoreddns.org/) |
| **`1.1.1.1`** | [cloudflare.com](https://1.1.1.1/) |
| **`94.130.110.185`** | [dnsprivacy.at](https://dnsprivacy.at/) |

### TOP Browser extensions

| <b><u>Extension name</u></b> | <b><u>Description</u></b> |
| :---         | :---         |
| **`IPvFoo`** | Display the server IP address and HTTPS information across all page elements. |
| **`FoxyProxy`** | Simplifies configuring browsers to access proxy-servers. |
| **`HTTPS Everywhere`** | Automatically use HTTPS security on many sites. |
| **`uMatrix`** | Point & click to forbid/allow any class of requests made by your browser. |
| **`uBlock Origin`** | An efficient blocker: easy on memory and CPU footprint. |
| **`Session Buddy`** | Manage browser tabs and bookmarks with ease. |
| **`SuperSorter`** | Sort bookmarks recursively, delete duplicates, merge folders, and more. |
| **`Clear Cache`** | Clear your cache and browsing data. |
| **`d3coder`** | Encoding/Decoding plugin for various types of encoding. |
| **`Web Developer`** | Adds a toolbar button with various web developer tools. |
| **`ThreatPinch Lookup`** | Add threat intelligence hover tool tips. |

### TOP Burp extensions

| <b><u>Extension name</u></b> | <b><u>Description</u></b> |
| :---         | :---         |
| **`Active Scan++`** | Extends Burp's active and passive scanning capabilities. |
| **`Autorize`** | Automatically detects authorization enforcement. |
| **`AuthMatrix`** | A simple matrix grid to define the desired levels of access privilege. |
| **`Logger++`** | Logs requests and responses for all Burp tools in a sortable table. |
| **`Bypass WAF`** | Adds headers useful for bypassing some WAF devices. |
| **`JSON Beautifier`** | Beautifies JSON content in the HTTP message viewer. |
| **`JSON Web Tokens`** | Enables Burp to decode and manipulate JSON web tokens. |
| **`CSP Auditor`** | Displays CSP headers for responses, and passively reports CSP weaknesses. |
| **`CSP-Bypass`** | Passively scans for CSP headers that contain known bypasses. |
| **`Hackvertor`** | Converts data using a tag-based configuration to apply various encoding. |
| **`HTML5 Auditor`** | Scans for usage of risky HTML5 features. |
| **`Software Vulnerability Scanner`** | Vulnerability scanner based on vulners.com audit API. |
| **`Turbo Intruder`** | Is a powerful bruteforcing tool. |
| **`Upload Scanner`** | Upload a number of different file types, laced with different forms of payload. |

### Hack Mozilla Firefox address bar

In Firefox's address bar, you can limit results by typing special characters before or after your term:

- `^` - for matches in your browsing history
- `*` - for matches in your bookmarks.
- `%` - for matches in your currently open tabs.
- `#` - for matches in page titles.
- `@` - for matches in web addresses.

### Chrome hidden commands

- `chrome://chrome-urls` - list of all commands
- `chrome://flags` - enable experiments and development features
- `chrome://interstitials` - errors and warnings
- `chrome://net-internals` - network internals (events, dns, cache)
- `chrome://network-errors` - network errors
- `chrome://net-export` - start logging future network activity to a file
- `chrome://safe-browsing` - safe browsing options
- `chrome://user-actions` - record all user actions
- `chrome://restart` - restart chrome
- `chrome://dino` - ERR_INTERNET_DISCONNECTED...
- `cache:<website-address>` - view the cached version of the web page

### Bypass WAFs by Shortening IP Address (by [0xInfection](https://twitter.com/0xInfection))

IP addresses can be shortened by dropping the zeroes:

```
http://1.0.0.1 → http://1.1
http://127.0.0.1 → http://127.1
http://192.168.0.1 → http://192.168.1

http://0xC0A80001 or http://3232235521 → 192.168.0.1
http://192.168.257 → 192.168.1.1
http://192.168.516 → 192.168.2.4
```

  > This bypasses WAF filters for SSRF, open-redirect, etc where any IP as input gets blacklisted.

For more information please see [How to Obscure Any URL](http://www.pc-help.org/obscure.htm) and [Magic IP Address Shortcuts](https://stuff-things.net/2014/09/25/magic-ip-address-shortcuts/).

### Hashing, encryption and encoding (by [Michal Špaček](https://twitter.com/spazef0rze))

_Hashing_

plaintext :arrow_right: hash<br/>
hash :no_entry: plaintext

_Symmetric encryption_

plaintext :arrow_right: :key: :arrow_right: ciphertext<br/>
plaintext :arrow_left: :key: :arrow_left: ciphertext<br/>
(:key: shared key)

_Asymmetric encryption_

plaintext :arrow_right: :key: :arrow_right: ciphertext<br/>
plaintext :arrow_left: :part_alternation_mark: :arrow_left: ciphertext<br/>
(:key: public key, :part_alternation_mark: private key)<br/>

_Encoding_

text :arrow_right: encoded<br/>
text :arrow_left: encoded
