import { ListWrapper } from 'angular2/src/facade/collection';
import { global, isPresent } from 'angular2/src/facade/lang';
import { DOM } from 'angular2/src/platform/dom/dom_adapter';
import { setTestabilityGetter } from 'angular2/core';
class PublicTestability {
    constructor(testability) {
        this._testability = testability;
    }
    isStable() { return this._testability.isStable(); }
    whenStable(callback) { this._testability.whenStable(callback); }
    findBindings(using, provider, exactMatch) {
        return this.findProviders(using, provider, exactMatch);
    }
    findProviders(using, provider, exactMatch) {
        return this._testability.findBindings(using, provider, exactMatch);
    }
}
export class BrowserGetTestability {
    static init() { setTestabilityGetter(new BrowserGetTestability()); }
    addToWindow(registry) {
        global.getAngularTestability = (elem, findInAncestors = true) => {
            var testability = registry.findTestabilityInTree(elem, findInAncestors);
            if (testability == null) {
                throw new Error('Could not find testability for element.');
            }
            return new PublicTestability(testability);
        };
        global.getAllAngularTestabilities = () => {
            var testabilities = registry.getAllTestabilities();
            return testabilities.map((testability) => { return new PublicTestability(testability); });
        };
        global.getAllAngularRootElements = () => registry.getAllRootElements();
        var whenAllStable = (callback) => {
            var testabilities = global.getAllAngularTestabilities();
            var count = testabilities.length;
            var didWork = false;
            var decrement = function (didWork_) {
                didWork = didWork || didWork_;
                count--;
                if (count == 0) {
                    callback(didWork);
                }
            };
            testabilities.forEach(function (testability) { testability.whenStable(decrement); });
        };
        if (!global.frameworkStabilizers) {
            global.frameworkStabilizers = ListWrapper.createGrowableSize(0);
        }
        global.frameworkStabilizers.push(whenAllStable);
    }
    findTestabilityInTree(registry, elem, findInAncestors) {
        if (elem == null) {
            return null;
        }
        var t = registry.getTestability(elem);
        if (isPresent(t)) {
            return t;
        }
        else if (!findInAncestors) {
            return null;
        }
        if (DOM.isShadowRoot(elem)) {
            return this.findTestabilityInTree(registry, DOM.getHost(elem), true);
        }
        return this.findTestabilityInTree(registry, DOM.parentElement(elem), true);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGFiaWxpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUd2SWdXZGFDLnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci90ZXN0YWJpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFrQixXQUFXLEVBQUMsTUFBTSxnQ0FBZ0M7T0FDcEUsRUFBb0IsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLDBCQUEwQjtPQUl0RSxFQUFDLEdBQUcsRUFBQyxNQUFNLHVDQUF1QztPQUVsRCxFQUtMLG9CQUFvQixFQUNyQixNQUFNLGVBQWU7QUFFdEI7SUFJRSxZQUFZLFdBQXdCO1FBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFBQyxDQUFDO0lBRTFFLFFBQVEsS0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFNUQsVUFBVSxDQUFDLFFBQWtCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFFLFlBQVksQ0FBQyxLQUFVLEVBQUUsUUFBZ0IsRUFBRSxVQUFtQjtRQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVSxFQUFFLFFBQWdCLEVBQUUsVUFBbUI7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckUsQ0FBQztBQUNILENBQUM7QUFFRDtJQUNFLE9BQU8sSUFBSSxLQUFLLG9CQUFvQixDQUFDLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwRSxXQUFX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cUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0FBQ0gsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXAsIE1hcFdyYXBwZXIsIExpc3RXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtDT05TVCwgQ09OU1RfRVhQUiwgZ2xvYmFsLCBpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb24sIFdyYXBwZWRFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1Byb21pc2VXcmFwcGVyLCBPYnNlcnZhYmxlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbmltcG9ydCB7RE9NfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcblxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgVGVzdGFiaWxpdHlSZWdpc3RyeSxcbiAgVGVzdGFiaWxpdHksXG4gIEdldFRlc3RhYmlsaXR5LFxuICBzZXRUZXN0YWJpbGl0eUdldHRlclxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuY2xhc3MgUHVibGljVGVzdGFiaWxpdHkge1xuICAvKiogQGludGVybmFsICovXG4gIF90ZXN0YWJpbGl0eTogVGVzdGFiaWxpdHk7XG5cbiAgY29uc3RydWN0b3IodGVzdGFiaWxpdHk6IFRlc3RhYmlsaXR5KSB7IHRoaXMuX3Rlc3RhYmlsaXR5ID0gdGVzdGFiaWxpdHk7IH1cblxuICBpc1N0YWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3Rlc3RhYmlsaXR5LmlzU3RhYmxlKCk7IH1cblxuICB3aGVuU3RhYmxlKGNhbGxiYWNrOiBGdW5jdGlvbikgeyB0aGlzLl90ZXN0YWJpbGl0eS53aGVuU3RhYmxlKGNhbGxiYWNrKTsgfVxuXG4gIGZpbmRCaW5kaW5ncyh1c2luZzogYW55LCBwcm92aWRlcjogc3RyaW5nLCBleGFjdE1hdGNoOiBib29sZWFuKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLmZpbmRQcm92aWRlcnModXNpbmcsIHByb3ZpZGVyLCBleGFjdE1hdGNoKTtcbiAgfVxuXG4gIGZpbmRQcm92aWRlcnModXNpbmc6IGFueSwgcHJvdmlkZXI6IHN0cmluZywgZXhhY3RNYXRjaDogYm9vbGVhbik6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdGVzdGFiaWxpdHkuZmluZEJpbmRpbmdzKHVzaW5nLCBwcm92aWRlciwgZXhhY3RNYXRjaCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJHZXRUZXN0YWJpbGl0eSBpbXBsZW1lbnRzIEdldFRlc3RhYmlsaXR5IHtcbiAgc3RhdGljIGluaXQoKSB7IHNldFRlc3RhYmlsaXR5R2V0dGVyKG5ldyBCcm93c2VyR2V0VGVzdGFiaWxpdHkoKSk7IH1cblxuICBhZGRUb1dpbmRvdyhyZWdpc3RyeTogVGVzdGFiaWxpdHlSZWdpc3RyeSk6IHZvaWQge1xuICAgIGdsb2JhbC5nZXRBbmd1bGFyVGVzdGFiaWxpdHkgPSAoZWxlbTogYW55LCBmaW5kSW5BbmNlc3RvcnM6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XG4gICAgICB2YXIgdGVzdGFiaWxpdHkgPSByZWdpc3RyeS5maW5kVGVzdGFiaWxpdHlJblRyZWUoZWxlbSwgZmluZEluQW5jZXN0b3JzKTtcbiAgICAgIGlmICh0ZXN0YWJpbGl0eSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgdGVzdGFiaWxpdHkgZm9yIGVsZW1lbnQuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFB1YmxpY1Rlc3RhYmlsaXR5KHRlc3RhYmlsaXR5KTtcbiAgICB9O1xuXG4gICAgZ2xvYmFsLmdldEFsbEFuZ3VsYXJUZXN0YWJpbGl0aWVzID0gKCkgPT4ge1xuICAgICAgdmFyIHRlc3RhYmlsaXRpZXMgPSByZWdpc3RyeS5nZXRBbGxUZXN0YWJpbGl0aWVzKCk7XG4gICAgICByZXR1cm4gdGVzdGFiaWxpdGllcy5tYXAoKHRlc3RhYmlsaXR5KSA9PiB7IHJldHVybiBuZXcgUHVibGljVGVzdGFiaWxpdHkodGVzdGFiaWxpdHkpOyB9KTtcbiAgICB9O1xuXG4gICAgZ2xvYmFsLmdldEFsbEFuZ3VsYXJSb290RWxlbWVudHMgPSAoKSA9PiByZWdpc3RyeS5nZXRBbGxSb290RWxlbWVudHMoKTtcblxuICAgIHZhciB3aGVuQWxsU3RhYmxlID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICB2YXIgdGVzdGFiaWxpdGllcyA9IGdsb2JhbC5nZXRBbGxBbmd1bGFyVGVzdGFiaWxpdGllcygpO1xuICAgICAgdmFyIGNvdW50ID0gdGVzdGFiaWxpdGllcy5sZW5ndGg7XG4gICAgICB2YXIgZGlkV29yayA9IGZhbHNlO1xuICAgICAgdmFyIGRlY3JlbWVudCA9IGZ1bmN0aW9uKGRpZFdvcmtfKSB7XG4gICAgICAgIGRpZFdvcmsgPSBkaWRXb3JrIHx8IGRpZFdvcmtfO1xuICAgICAgICBjb3VudC0tO1xuICAgICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgIGNhbGxiYWNrKGRpZFdvcmspO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGVzdGFiaWxpdGllcy5mb3JFYWNoKGZ1bmN0aW9uKHRlc3RhYmlsaXR5KSB7IHRlc3RhYmlsaXR5LndoZW5TdGFibGUoZGVjcmVtZW50KTsgfSk7XG4gICAgfTtcblxuICAgIGlmICghZ2xvYmFsLmZyYW1ld29ya1N0YWJpbGl6ZXJzKSB7XG4gICAgICBnbG9iYWwuZnJhbWV3b3JrU3RhYmlsaXplcnMgPSBMaXN0V3JhcHBlci5jcmVhdGVHcm93YWJsZVNpemUoMCk7XG4gICAgfVxuICAgIGdsb2JhbC5mcmFtZXdvcmtTdGFiaWxpemVycy5wdXNoKHdoZW5BbGxTdGFibGUpO1xuICB9XG5cbiAgZmluZFRlc3RhYmlsaXR5SW5UcmVlKHJlZ2lzdHJ5OiBUZXN0YWJpbGl0eVJlZ2lzdHJ5LCBlbGVtOiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kSW5BbmNlc3RvcnM6IGJvb2xlYW4pOiBUZXN0YWJpbGl0eSB7XG4gICAgaWYgKGVsZW0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciB0ID0gcmVnaXN0cnkuZ2V0VGVzdGFiaWxpdHkoZWxlbSk7XG4gICAgaWYgKGlzUHJlc2VudCh0KSkge1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSBlbHNlIGlmICghZmluZEluQW5jZXN0b3JzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKERPTS5pc1NoYWRvd1Jvb3QoZWxlbSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmRUZXN0YWJpbGl0eUluVHJlZShyZWdpc3RyeSwgRE9NLmdldEhvc3QoZWxlbSksIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maW5kVGVzdGFiaWxpdHlJblRyZWUocmVnaXN0cnksIERPTS5wYXJlbnRFbGVtZW50KGVsZW0pLCB0cnVlKTtcbiAgfVxufVxuIl19