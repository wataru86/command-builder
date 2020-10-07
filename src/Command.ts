export interface CmdTree {
  show(): string;
}

class CmdRoot implements CmdTree {
  constructor(public children: CmdTree[]) { }
  show() { return "";}
}

class CmdNode implements CmdTree {
  constructor(public name: string, public children: CmdTree[]) { }
  show() { return `${name} ...`; }
}

class CmdLeaf implements CmdTree {
  constructor(public name: string) { }
  show() { return name; }
}

const childrenExample = [
  new CmdNode("git", [new CmdLeaf("status"), new CmdNode("add", [new CmdLeaf(".")]), new CmdNode("commit", [new CmdLeaf('"Update ChangeLog.md"')])]),
  new CmdNode("docker", [new CmdLeaf("images")])
]
export const example = new CmdRoot(childrenExample);