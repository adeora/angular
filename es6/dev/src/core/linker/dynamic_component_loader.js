var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ReflectiveInjector } from 'angular2/src/core/di';
import { ComponentResolver } from './component_resolver';
import { isPresent } from 'angular2/src/facade/lang';
/**
 * Service for instantiating a Component and attaching it to a View at a specified location.
 */
export class DynamicComponentLoader {
}
export let DynamicComponentLoader_ = class DynamicComponentLoader_ extends DynamicComponentLoader {
    constructor(_compiler) {
        super();
        this._compiler = _compiler;
    }
    loadAsRoot(type, overrideSelectorOrNode, injector, onDispose, projectableNodes) {
        return this._compiler.resolveComponent(type).then(componentFactory => {
            var componentRef = componentFactory.create(injector, projectableNodes, isPresent(overrideSelectorOrNode) ? overrideSelectorOrNode : componentFactory.selector);
            if (isPresent(onDispose)) {
                componentRef.onDestroy(onDispose);
            }
            return componentRef;
        });
    }
    loadNextToLocation(type, location, providers = null, projectableNodes = null) {
        return this._compiler.resolveComponent(type).then(componentFactory => {
            var contextInjector = location.parentInjector;
            var childInjector = isPresent(providers) && providers.length > 0 ?
                ReflectiveInjector.fromResolvedProviders(providers, contextInjector) :
                contextInjector;
            return location.createComponent(componentFactory, location.length, childInjector, projectableNodes);
        });
    }
};
DynamicComponentLoader_ = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [ComponentResolver])
], DynamicComponentLoader_);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY19jb21wb25lbnRfbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1HdklnV2RhQy50bXAvYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2R5bmFtaWNfY29tcG9uZW50X2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUdMLFVBQVUsRUFDVixrQkFBa0IsRUFDbkIsTUFBTSxzQkFBc0I7T0FDdEIsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQjtPQUMvQyxFQUEwQixTQUFTLEVBQUMsTUFBTSwwQkFBMEI7QUFJM0U7O0dBRUc7QUFDSDtBQWlHQSxDQUFDO0FBR0QsMkVBQTZDLHNCQUFzQjtJQUNqRSxZQUFvQixTQUE0QjtRQUFJLE9BQU8sQ0FBQztRQUF4QyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtJQUFhLENBQUM7SUFFOUQsVUFBVSxDQUFDLElBQVUsRUFBRSxzQkFBb0MsRUFBRSxRQUFrQixFQUNwRSxTQUFzQixFQUFFLGdCQUEwQjtRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ2hFLElBQUksWUFBWSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FDdEMsUUFBUSxFQUFFLGdCQUFnQixFQUMxQixTQUFTLENBQUMsc0JBQXNCLENBQUMsR0FBRyxzQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVUsRUFBRSxRQUEwQixFQUN0QyxTQUFTLEdBQWlDLElBQUksRUFDOUMsZ0JBQWdCLEdBQVksSUFBSTtRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ2hFLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDOUMsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDeEMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztnQkFDcEUsZUFBZSxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUNoRCxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUM7QUE3QkQ7SUFBQyxVQUFVLEVBQUU7OzJCQUFBO0FBNkJaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0b3IsXG4gIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyLFxuICBJbmplY3RhYmxlLFxuICBSZWZsZWN0aXZlSW5qZWN0b3Jcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtDb21wb25lbnRSZXNvbHZlcn0gZnJvbSAnLi9jb21wb25lbnRfcmVzb2x2ZXInO1xuaW1wb3J0IHtpc1R5cGUsIFR5cGUsIHN0cmluZ2lmeSwgaXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtDb21wb25lbnRSZWZ9IGZyb20gJy4vY29tcG9uZW50X2ZhY3RvcnknO1xuaW1wb3J0IHtWaWV3Q29udGFpbmVyUmVmfSBmcm9tICcuL3ZpZXdfY29udGFpbmVyX3JlZic7XG5cbi8qKlxuICogU2VydmljZSBmb3IgaW5zdGFudGlhdGluZyBhIENvbXBvbmVudCBhbmQgYXR0YWNoaW5nIGl0IHRvIGEgVmlldyBhdCBhIHNwZWNpZmllZCBsb2NhdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIER5bmFtaWNDb21wb25lbnRMb2FkZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhIENvbXBvbmVudCBgdHlwZWAgYW5kIGF0dGFjaGVzIGl0IHRvIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZVxuICAgKiBwbGF0Zm9ybS1zcGVjaWZpYyBnbG9iYWwgdmlldyB0aGF0IG1hdGNoZXMgdGhlIGNvbXBvbmVudCdzIHNlbGVjdG9yLlxuICAgKlxuICAgKiBJbiBhIGJyb3dzZXIgdGhlIHBsYXRmb3JtLXNwZWNpZmljIGdsb2JhbCB2aWV3IGlzIHRoZSBtYWluIERPTSBEb2N1bWVudC5cbiAgICpcbiAgICogSWYgbmVlZGVkLCB0aGUgY29tcG9uZW50J3Mgc2VsZWN0b3IgY2FuIGJlIG92ZXJyaWRkZW4gdmlhIGBvdmVycmlkZVNlbGVjdG9yYC5cbiAgICpcbiAgICogWW91IGNhbiBvcHRpb25hbGx5IHByb3ZpZGUgYGluamVjdG9yYCBhbmQgdGhpcyB7QGxpbmsgSW5qZWN0b3J9IHdpbGwgYmUgdXNlZCB0byBpbnN0YW50aWF0ZSB0aGVcbiAgICogQ29tcG9uZW50LlxuICAgKlxuICAgKiBUbyBiZSBub3RpZmllZCB3aGVuIHRoaXMgQ29tcG9uZW50IGluc3RhbmNlIGlzIGRlc3Ryb3llZCwgeW91IGNhbiBhbHNvIG9wdGlvbmFsbHkgcHJvdmlkZVxuICAgKiBgb25EaXNwb3NlYCBjYWxsYmFjay5cbiAgICpcbiAgICogUmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSB7QGxpbmsgQ29tcG9uZW50UmVmfSByZXByZXNlbnRpbmcgdGhlIG5ld2x5IGNyZWF0ZWQgQ29tcG9uZW50LlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGBcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdjaGlsZC1jb21wb25lbnQnLFxuICAgKiAgIHRlbXBsYXRlOiAnQ2hpbGQnXG4gICAqIH0pXG4gICAqIGNsYXNzIENoaWxkQ29tcG9uZW50IHtcbiAgICogfVxuICAgKlxuICAgKiBAQ29tcG9uZW50KHtcbiAgICogICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAqICAgdGVtcGxhdGU6ICdQYXJlbnQgKDxjaGlsZCBpZD1cImNoaWxkXCI+PC9jaGlsZD4pJ1xuICAgKiB9KVxuICAgKiBjbGFzcyBNeUFwcCB7XG4gICAqICAgY29uc3RydWN0b3IoZGNsOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICogICAgIGRjbC5sb2FkQXNSb290KENoaWxkQ29tcG9uZW50LCAnI2NoaWxkJywgaW5qZWN0b3IpO1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBib290c3RyYXAoTXlBcHApO1xuICAgKiBgYGBcbiAgICpcbiAgICogUmVzdWx0aW5nIERPTTpcbiAgICpcbiAgICogYGBgXG4gICAqIDxteS1hcHA+XG4gICAqICAgUGFyZW50IChcbiAgICogICAgIDxjaGlsZCBpZD1cImNoaWxkXCI+Q2hpbGQ8L2NoaWxkPlxuICAgKiAgIClcbiAgICogPC9teS1hcHA+XG4gICAqIGBgYFxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZEFzUm9vdCh0eXBlOiBUeXBlLCBvdmVycmlkZVNlbGVjdG9yT3JOb2RlOiBzdHJpbmcgfCBhbnksIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgICAgICAgICAgICAgICBvbkRpc3Bvc2U/OiAoKSA9PiB2b2lkLCBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXSk6IFByb21pc2U8Q29tcG9uZW50UmVmPjtcblxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgQ29tcG9uZW50IGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgVmlldyBDb250YWluZXIgZm91bmQgYXQgdGhlXG4gICAqIGBsb2NhdGlvbmAgc3BlY2lmaWVkIGFzIHtAbGluayBWaWV3Q29udGFpbmVyUmVmfS5cbiAgICpcbiAgICogWW91IGNhbiBvcHRpb25hbGx5IHByb3ZpZGUgYHByb3ZpZGVyc2AgdG8gY29uZmlndXJlIHRoZSB7QGxpbmsgSW5qZWN0b3J9IHByb3Zpc2lvbmVkIGZvciB0aGlzXG4gICAqIENvbXBvbmVudCBJbnN0YW5jZS5cbiAgICpcbiAgICogUmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSB7QGxpbmsgQ29tcG9uZW50UmVmfSByZXByZXNlbnRpbmcgdGhlIG5ld2x5IGNyZWF0ZWQgQ29tcG9uZW50LlxuICAgKlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBgYGBcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdjaGlsZC1jb21wb25lbnQnLFxuICAgKiAgIHRlbXBsYXRlOiAnQ2hpbGQnXG4gICAqIH0pXG4gICAqIGNsYXNzIENoaWxkQ29tcG9uZW50IHtcbiAgICogfVxuICAgKlxuICAgKiBAQ29tcG9uZW50KHtcbiAgICogICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAqICAgdGVtcGxhdGU6ICdQYXJlbnQnXG4gICAqIH0pXG4gICAqIGNsYXNzIE15QXBwIHtcbiAgICogICBjb25zdHJ1Y3RvcihkY2w6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICogICAgIGRjbC5sb2FkTmV4dFRvTG9jYXRpb24oQ2hpbGRDb21wb25lbnQsIHZpZXdDb250YWluZXJSZWYpO1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBib290c3RyYXAoTXlBcHApO1xuICAgKiBgYGBcbiAgICpcbiAgICogUmVzdWx0aW5nIERPTTpcbiAgICpcbiAgICogYGBgXG4gICAqIDxteS1hcHA+UGFyZW50PC9teS1hcHA+XG4gICAqIDxjaGlsZC1jb21wb25lbnQ+Q2hpbGQ8L2NoaWxkLWNvbXBvbmVudD5cbiAgICogYGBgXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkTmV4dFRvTG9jYXRpb24odHlwZTogVHlwZSwgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM/OiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGFibGVOb2Rlcz86IGFueVtdW10pOiBQcm9taXNlPENvbXBvbmVudFJlZj47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29tcG9uZW50TG9hZGVyXyBleHRlbmRzIER5bmFtaWNDb21wb25lbnRMb2FkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21waWxlcjogQ29tcG9uZW50UmVzb2x2ZXIpIHsgc3VwZXIoKTsgfVxuXG4gIGxvYWRBc1Jvb3QodHlwZTogVHlwZSwgb3ZlcnJpZGVTZWxlY3Rvck9yTm9kZTogc3RyaW5nIHwgYW55LCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgICAgICAgb25EaXNwb3NlPzogKCkgPT4gdm9pZCwgcHJvamVjdGFibGVOb2Rlcz86IGFueVtdW10pOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5yZXNvbHZlQ29tcG9uZW50KHR5cGUpLnRoZW4oY29tcG9uZW50RmFjdG9yeSA9PiB7XG4gICAgICB2YXIgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoXG4gICAgICAgICAgaW5qZWN0b3IsIHByb2plY3RhYmxlTm9kZXMsXG4gICAgICAgICAgaXNQcmVzZW50KG92ZXJyaWRlU2VsZWN0b3JPck5vZGUpID8gb3ZlcnJpZGVTZWxlY3Rvck9yTm9kZSA6IGNvbXBvbmVudEZhY3Rvcnkuc2VsZWN0b3IpO1xuICAgICAgaWYgKGlzUHJlc2VudChvbkRpc3Bvc2UpKSB7XG4gICAgICAgIGNvbXBvbmVudFJlZi5vbkRlc3Ryb3kob25EaXNwb3NlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkTmV4dFRvTG9jYXRpb24odHlwZTogVHlwZSwgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10gPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGFibGVOb2RlczogYW55W11bXSA9IG51bGwpOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5yZXNvbHZlQ29tcG9uZW50KHR5cGUpLnRoZW4oY29tcG9uZW50RmFjdG9yeSA9PiB7XG4gICAgICB2YXIgY29udGV4dEluamVjdG9yID0gbG9jYXRpb24ucGFyZW50SW5qZWN0b3I7XG4gICAgICB2YXIgY2hpbGRJbmplY3RvciA9IGlzUHJlc2VudChwcm92aWRlcnMpICYmIHByb3ZpZGVycy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocHJvdmlkZXJzLCBjb250ZXh0SW5qZWN0b3IpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRJbmplY3RvcjtcbiAgICAgIHJldHVybiBsb2NhdGlvbi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgbG9jYXRpb24ubGVuZ3RoLCBjaGlsZEluamVjdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0YWJsZU5vZGVzKTtcbiAgICB9KTtcbiAgfVxufVxuIl19