class Sidebar
  class Expander
    def self.setup
      new.setup
    end

    def setup
      on_toggle_sidebar
      on_expand_all
      on_collapse_all
    end

    def on_toggle_sidebar
      menu = Element.find('#menu-toggle')
      sidebar = Element.find("#sidebar")
      body = Element.find("#body")
      menu.on(:click) do |e|
        e.prevent_default
        sidebar.toggle_class("toggled") # slide out sidebar menu
        body.toggle_class("hidden") # disable body scroll
        menu.toggle_class("cross") # change hamburger to cross
      end
    end

    def on_expand_all
      expand_all = Element.find('#expand-all')
      expand_all.on("click") do |e|
        sidebar = Element.find("#sidebar")
        carets = sidebar.find("span.caret")
        carets.each do |caret| expand_carret(caret) end
      end
    end

    def on_collapse_all
      collapse_all = Element.find('#collapse-all')
      collapse_all.on("click") do |e|
        sidebar = Element.find("#sidebar")
        carets = sidebar.find("span.caret")
        carets.each do |caret| collapse_carret(caret) end
      end
    end

    def collapse_carret(caret)
      caret.removeClass("caret-down")
      caret.siblings("ul").hide
    end

    def expand_carret(caret)
      caret.addClass("caret-down")
      caret.siblings("ul").show
    end
  end
end
