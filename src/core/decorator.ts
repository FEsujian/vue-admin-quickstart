import { createDecorator } from 'vue-class-component';
import injector from 'vue-inject';
import { Observable } from 'rxjs';
/* tslint:disable:no-string-literal */
/**
 * 组件内依赖注入
 */
export function Dependencies(target?: any) {
  return createDecorator((componentOptions, key) => {
    if (!injector.$$factories[key] && target) {
      injector.service(key, target);
    }

    if (typeof componentOptions['dependencies'] === 'undefined') {
      componentOptions['dependencies'] = [];
    }

    if (Array.isArray(componentOptions['dependencies'])) {
      componentOptions['dependencies'].push(key);
    }
  });
}

/**
 * 直接依赖注入
 */
/* tslint:disable:only-arrow-functions */
export function Inject(target?): PropertyDecorator {
  return function(container, key) {
    if (!injector.$$factories[key] && target) {
      injector.service(key, target);
    }

    try {
      container[key] = injector.get(key);
    } catch (ex) {
      console.warn(ex);
    }
  };
}

/**
 * 设置布局
 * @param target
 */
export function Layout(layout: string) {
  return function(target) {
    target.$layout = layout;
    return target;
  };
}

/**
 * 设置扩展属性
 * @param extend
 */
export function Extend(data: any) {
  return function(target) {
    Object.entries(data).forEach(([key, value]) => {
      target[key] = value;
    });
    return target;
  };
}
