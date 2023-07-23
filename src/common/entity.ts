type Props = {
  id: number | string;
} & {
  [key: string]: any;
};

export class Entity<T extends Props> {
  private _props: T;
  private changedProps = new Set<keyof T>();

  public constructor(init: T) {
    this._props = init;
  }

  public get props(): Readonly<T> {
    return this._props;
  }

  public _isChanged(...props: (keyof T)[]) {
    return props.some((prop) => this.changedProps.has(prop));
  }

  public getId(): T['id'] {
    return this.props.id;
  }

  protected setProps(props: Partial<T>) {
    Object.keys(props).forEach((prop: keyof T) => {
      this.changedProps.add(prop);
      this._props[prop] = props[prop];
    });
  }
}
